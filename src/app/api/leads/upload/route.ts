import { prismaClient } from "@/lib/prismaClient";
import { onAuthenticateUser } from "@/action/auth";
import { NextRequest, NextResponse } from "next/server";
import { parse } from "csv-parse/sync";
import { CallStatusEnum, AttendedTypeEnum, CtaTypeEnum } from "@prisma/client";

interface CSVRow {
  name: string;
  email: string;
  phone?: string;
  tags: string;
  callStatus: string;
  createdAt: string;
  updatedAt: string;
}

export async function POST(request: NextRequest) {
  try {
    const authResult = await onAuthenticateUser();
    
    // Check if authentication was successful
    if (authResult.status !== 200 && authResult.status !== 201) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get the current user's database record
    const currentUserRecord = authResult.user;

    if (!currentUserRecord) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const text = await file.text();
    const records = parse(text, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    }) as CSVRow[];

    let processed = 0;
    let newLeads = 0;
    let updated = 0;
    let errors: string[] = [];

    // Get or create a default webinar for the user to associate leads with
    let defaultWebinar = await prismaClient.webinar.findFirst({
      where: {
        presenterId: currentUserRecord.id,
        title: "Imported Leads",
      },
    });

    if (!defaultWebinar) {
      defaultWebinar = await prismaClient.webinar.create({
        data: {
          title: "Imported Leads",
          description: "Leads imported from CSV",
          startTime: new Date(),
          endTime: new Date(),
          presenterId: currentUserRecord.id,
          tags: [],
          ctaType: CtaTypeEnum.BOOK_A_CALL,
        },
      });
    }

    for (const row of records) {
      try {
        // Validate required fields
        if (!row.name || !row.email) {
          errors.push(`Row missing name or email: ${row.email || "unknown"}`);
          continue;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(row.email)) {
          errors.push(`Invalid email format: ${row.email}`);
          continue;
        }

        // Parse callStatus
        let callStatus: CallStatusEnum = CallStatusEnum.PENDING;
        if (row.callStatus) {
          const statusUpper = row.callStatus.toUpperCase();
          if (statusUpper === "COMPLETED") {
            callStatus = CallStatusEnum.COMPLETED;
          } else if (statusUpper === "INPROGRESS" || statusUpper === "IN_PROGRESS") {
            callStatus = CallStatusEnum.InProgress;
          } else {
            callStatus = CallStatusEnum.PENDING;
          }
        }

        // Parse dates
        let createdAt = new Date();
        let updatedAt = new Date();
        
        if (row.createdAt) {
          const parsedCreated = new Date(row.createdAt);
          if (!isNaN(parsedCreated.getTime())) {
            createdAt = parsedCreated;
          }
        }
        
        if (row.updatedAt) {
          const parsedUpdated = new Date(row.updatedAt);
          if (!isNaN(parsedUpdated.getTime())) {
            updatedAt = parsedUpdated;
          }
        }

        // Parse tags
        const tags = row.tags
          ? row.tags.split(",").map((tag) => tag.trim()).filter((tag) => tag.length > 0)
          : [];

        // Check if attendee already exists
        const existingAttendee = await prismaClient.attendee.findUnique({
          where: { email: row.email },
        });

        if (existingAttendee) {
          // Update existing attendee
          await prismaClient.attendee.update({
            where: { email: row.email },
            data: {
              name: row.name,
              callStatus,
              updatedAt,
            },
          });
          updated++;
        } else {
          // Create new attendee
          await prismaClient.attendee.create({
            data: {
              name: row.name,
              email: row.email,
              callStatus,
              createdAt,
              updatedAt,
            },
          });
          newLeads++;
        }

        // Create or update attendance record
        const attendee = await prismaClient.attendee.findUnique({
          where: { email: row.email },
        });

        if (attendee) {
          // Check if attendance already exists
          const existingAttendance = await prismaClient.attendance.findFirst({
            where: {
              attendeeId: attendee.id,
              webinarId: defaultWebinar.id,
            },
          });

          if (!existingAttendance) {
            await prismaClient.attendance.create({
              data: {
                attendeeId: attendee.id,
                webinarId: defaultWebinar.id,
                attendedType: AttendedTypeEnum.REGISTERED,
              },
            });
          }

          // Update webinar tags if there are new tags
          if (tags.length > 0) {
            const currentTags = defaultWebinar.tags || [];
            const uniqueTags = Array.from(new Set([...currentTags, ...tags]));
            await prismaClient.webinar.update({
              where: { id: defaultWebinar.id },
              data: { tags: uniqueTags },
            });
          }
        }

        processed++;
      } catch (error) {
        console.error(`Error processing row for ${row.email}:`, error);
        errors.push(`Error processing ${row.email}: ${error instanceof Error ? error.message : "Unknown error"}`);
      }
    }

    return NextResponse.json({
      success: true,
      message: "CSV processed successfully",
      stats: {
        total: records.length,
        processed,
        newLeads,
        updated,
        errors: errors.length,
      },
      errors: errors.length > 0 ? errors.slice(0, 10) : [], // Return first 10 errors
    });
  } catch (error) {
    console.error("Error processing CSV:", error);
    return NextResponse.json(
      { error: "Failed to process CSV", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}


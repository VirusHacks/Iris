import { redirect } from "next/navigation";
import React from "react";
import { getAttendeeById } from "@/action/attendance";
import { getWebinarById } from "@/action/webinar";
import { CallStatusEnum, WebinarStatusEnum } from "@prisma/client";
import AutoConnectCall from "./_components/AutoConnectCall";
import { WebinarWithPresenter } from "@/lib/type";

type Props = {
  params: Promise<{
    liveWebinarId: string;
  }>;
  searchParams: Promise<{
    attendeeId: string;
  }>;
};

const page = async ({ params, searchParams }: Props) => {
  const { liveWebinarId } = await params;
  const { attendeeId } = await searchParams;
  
  if (!liveWebinarId || !attendeeId) {
    console.error("[Call Page] Missing required parameters:", { liveWebinarId, attendeeId });
    redirect("/404");
  }

  console.log("[Call Page] Looking up attendee:", { attendeeId, liveWebinarId });
  const attendee = await getAttendeeById(attendeeId, liveWebinarId);
  
  if (!attendee.success || !attendee.data) {
    console.error("[Call Page] Attendee lookup failed:", {
      attendeeId,
      liveWebinarId,
      status: attendee.status,
      message: attendee.message,
      success: attendee.success
    });
    redirect(`/live-webinar/${liveWebinarId}?error=attendee-not-found`);
  }
  
  console.log("[Call Page] Attendee found successfully:", { attendeeId, name: attendee.data.name });

  const webinar = await getWebinarById(liveWebinarId);
  if (!webinar) {
    redirect("/404");
  }

  if (
    webinar.webinarStatus === WebinarStatusEnum.WAITING_ROOM ||
    webinar.webinarStatus === WebinarStatusEnum.SCHEDULED
  ) {
    redirect(`/live-webinar/${liveWebinarId}?error=webinar-not-started`);
  }

  if (webinar.ctaType !== "BOOK_A_CALL" || !webinar.aiAgentId) {
    console.log("Cannot book call - Missing requirements:", {
      ctaType: webinar.ctaType,
      aiAgentId: webinar.aiAgentId,
      priceId: webinar.priceId,
    });
    redirect(`/live-webinar/${liveWebinarId}?error=cannot-book-a-call`);
  }

  if (attendee.data.callStatus === CallStatusEnum.COMPLETED) {
    redirect(`/live-webinar/${liveWebinarId}?error=call-not-pending`);
  }

  return (
    <AutoConnectCall
      userName={attendee.data.name}
      assistantId={webinar.aiAgentId}
      webinar={webinar as WebinarWithPresenter}
      userId={attendeeId}
    />
  );
};

export default page;

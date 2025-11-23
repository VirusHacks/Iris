'use server'

import { prismaClient } from '@/lib/prismaClient'
import { currentUser } from '@clerk/nextjs/server'

export const getNewLeads = async () => {
  try {
    const user = await currentUser()
    if (!user) {
      return { status: 403 }
    }

    // First get the current user's database record
    const currentUserRecord = await prismaClient.user.findUnique({
      where: {
        clerkId: user.id,
      },
    })

    if (!currentUserRecord) {
      return { status: 404, error: 'User not found' }
    }

    // Get leads created in the last 30 days (new leads)
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    const newLeads = await prismaClient.attendee.findMany({
      where: {
        Attendance: {
          some: {
            webinar: {
              presenterId: currentUserRecord.id,
            },
          },
        },
        createdAt: {
          gte: thirtyDaysAgo,
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        callStatus: true,
        createdAt: true,
        updatedAt: true,
        Attendance: {
          where: {
            webinar: {
              presenterId: currentUserRecord.id,
            },
          },
          select: {
            attendedType: true,
            webinar: {
              select: {
                tags: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    // Transform the data
    const transformedLeads = newLeads.map((lead) => ({
      id: lead.id,
      name: lead.name,
      email: lead.email,
      phone: '', // Phone is not in our schema
      tags: lead.Attendance.flatMap((attendance) => attendance.webinar.tags),
      createdAt: lead.createdAt,
      updatedAt: lead.updatedAt,
    }))

    return {
      status: 200,
      leads: transformedLeads,
    }
  } catch (error) {
    console.log('🔴 ERROR', error)
    return { status: 500, error: 'Internal Server Error' }
  }
}

export const getConversionStats = async () => {
  try {
    const user = await currentUser()
    if (!user) {
      return { status: 403 }
    }

    const currentUserRecord = await prismaClient.user.findUnique({
      where: {
        clerkId: user.id,
      },
    })

    if (!currentUserRecord) {
      return { status: 404, error: 'User not found' }
    }

    // Get all leads
    const allLeads = await prismaClient.attendee.findMany({
      where: {
        Attendance: {
          some: {
            webinar: {
              presenterId: currentUserRecord.id,
            },
          },
        },
      },
      select: {
        callStatus: true,
        createdAt: true,
      },
    })

    // Calculate conversion stats
    const totalLeads = allLeads.length
    // Assuming COMPLETED call status means converted to sale
    const convertedLeads = allLeads.filter(
      (lead) => lead.callStatus === 'COMPLETED'
    ).length
    const conversionRate = totalLeads > 0 ? (convertedLeads / totalLeads) * 100 : 0

    // Estimate contacted leads (leads that have been interacted with)
    // For now, we'll estimate: 70% of total leads are contacted
    const contactedLeads = Math.floor(totalLeads * 0.7)
    
    // Estimate qualified leads: 50% of contacted leads
    const qualifiedLeads = Math.floor(contactedLeads * 0.5)

    // Calculate credits earned (assuming 10 credits per conversion)
    const creditsEarned = convertedLeads * 10

    return {
      status: 200,
      stats: {
        totalLeads,
        contactedLeads,
        qualifiedLeads,
        convertedLeads,
        conversionRate: Math.round(conversionRate * 100) / 100, // Round to 2 decimal places
        creditsEarned,
      },
    }
  } catch (error) {
    console.log('🔴 ERROR', error)
    return { status: 500, error: 'Internal Server Error' }
  }
}


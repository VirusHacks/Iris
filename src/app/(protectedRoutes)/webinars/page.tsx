import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import WebinarCard from "./_components/WebinarCard";
import { onAuthenticateUser } from "@/action/auth";
import { getWebinarByPresenterId } from "@/action/webinar";
import { redirect } from "next/navigation";
import { Webinar, WebinarStatusEnum } from "@prisma/client";
import { Webcam } from "lucide-react";
import Link from "next/link";

type Props = {
  searchParams: Promise<{
    webinarStatus: string;
  }>;
};

const page = async ({ searchParams }: Props) => {
  const { webinarStatus } = await searchParams;
  const checkUser = await onAuthenticateUser();
  if (!checkUser.user) {
    redirect("/");
  }
  const webinars = await getWebinarByPresenterId(
    checkUser?.user?.id,
    webinarStatus as WebinarStatusEnum
  );
  return (
    <div className="w-full min-h-screen bg-black space-y-8 pb-12">
      {/* Minimal Header */}
      <div className="relative">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
          <Webcam className="h-8 w-8 text-purple-400" />
          Webinars
        </h1>
        <p className="text-gray-400 text-sm">
          The home to all your Meetings
        </p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="grid w-full max-w-3xl grid-cols-3 h-12 bg-[#0a0a0a] border border-gray-800 rounded-lg p-1">
            <TabsTrigger 
              value="all" 
              className="flex items-center justify-center gap-2 text-sm font-medium data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400 data-[state=active]:border data-[state=active]:border-purple-500/30 text-gray-400 transition-all rounded-md"
            >
              <Link href={`/webinars?webinarStatus=all`} className="w-full text-center">All</Link>
            </TabsTrigger>
            <TabsTrigger 
              value="upcoming" 
              className="flex items-center justify-center gap-2 text-sm font-medium data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400 data-[state=active]:border data-[state=active]:border-purple-500/30 text-gray-400 transition-all rounded-md"
            >
              <Link href={`/webinars?webinarStatus=upcoming`} className="w-full text-center">Upcoming</Link>
            </TabsTrigger>
            <TabsTrigger 
              value="ended" 
              className="flex items-center justify-center gap-2 text-sm font-medium data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400 data-[state=active]:border data-[state=active]:border-purple-500/30 text-gray-400 transition-all rounded-md"
            >
              <Link href={`/webinars?webinarStatus=ended`} className="w-full text-center">Ended</Link>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent
          value="all"
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {webinars?.length > 0 ? (
            webinars.map((webinar: Webinar, index: number) => (
              <WebinarCard key={index} webinar={webinar} />
            ))
          ) : (
            <div className="w-full h-[200px] flex justify-center items-center text-gray-400 font-semibold text-xl col-span-full">
              No Meeting found
            </div>
          )}
        </TabsContent>
        <TabsContent value="upcoming" className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {webinars?.length > 0 ? (
            webinars.map((webinar: Webinar, index: number) => (
              <WebinarCard key={index} webinar={webinar} />
            ))
          ) : (
            <div className="w-full h-[200px] flex justify-center items-center text-gray-400 font-semibold text-xl col-span-full">
              No Meeting found
            </div>
          )}
        </TabsContent>
        <TabsContent value="ended" className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {webinars?.length > 0 ? (
            webinars.map((webinar: Webinar, index: number) => (
              <WebinarCard key={index} webinar={webinar} />
            ))
          ) : (
            <div className="w-full h-[200px] flex justify-center items-center text-gray-400 font-semibold text-xl col-span-full">
              No Webinar found
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
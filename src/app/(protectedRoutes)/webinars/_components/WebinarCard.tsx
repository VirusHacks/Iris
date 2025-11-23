import { Calendar } from "lucide-react";
import Link from "next/link";
import React from "react";
import { format } from "date-fns";
import Image from "next/image";
import { Webinar } from "@prisma/client";
import PipelineIcon from "@/icons/PipelineIcon";

type Props = {
  webinar: Webinar;
};

const WebinarCard = ({ webinar }: Props) => {
  return (
    <div className="flex gap-3 flex-col items-start w-full bg-[#0a0a0a] border border-gray-800 rounded-lg p-4 hover:border-purple-500/50 transition-all">
      <Link href={`/live-webinar/${webinar?.id}`} className="w-full">
        <Image
          src={"/darkthumbnail.png"}
          alt="webinar"
          width={400}
          height={100}
          className="rounded-md w-full h-auto"
        />
      </Link>
      <div className="w-full flex justify-between gap-3 items-start">
        <Link
          href={`/live-webinar/${webinar?.id}`}
          className="flex flex-col gap-2 items-start flex-1"
        >
          <div>
            <p className="text-sm text-white font-semibold">
              {webinar?.title}
            </p>
            <p className="text-xs text-gray-400 mt-1 line-clamp-2">
              {webinar?.description}
            </p>
          </div>

          <div className="flex gap-2 justify-start items-center">
            <div className="flex gap-2 items-center text-xs text-gray-400">
              <Calendar size={15} />
              <p>{format(new Date(webinar?.startTime), "dd/MM/yyyy")}</p>
            </div>
          </div>
        </Link>

        <Link
          href={`/webinars/${webinar?.id}/pipeline`}
          className="flex px-4 py-2 rounded-md border border-gray-700 bg-[#0a0a0a] text-white hover:bg-gray-900 hover:border-purple-500/50 transition-all"
        >
          <PipelineIcon className="w-4 h-4"/> 
        </Link>
      </div>
    </div>
  );
};

export default WebinarCard;

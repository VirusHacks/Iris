/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Users, MessageSquare, Loader2 } from "lucide-react";
import { Chat, Channel, MessageList, MessageInput } from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css";
import {
  ParticipantView,
  useCallStateHooks,
  type Call,
} from "@stream-io/video-react-sdk";
import { Button } from "@/components/ui/button";
import { CtaTypeEnum } from "@prisma/client";
import { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import CTADialogBox from "./CTADialogBox";
import type { WebinarWithPresenter } from "@/lib/type";
import { changeWebinarStatus } from "@/action/webinar";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import ObsDialogBox from "./ObsDialogBox";
import { useAttendeeStore } from "@/store/useAttendeeStore";

type Props = {
  showChat: boolean;
  setShowChat: (show: boolean) => void;
  webinar: WebinarWithPresenter;
  isHost?: boolean;
  username: string;
  userId: string;
  call: Call;
  userToken: string;
};

const LiveWebinarView = ({
  showChat,
  setShowChat,
  webinar,
  isHost = false,
  username,
  userId,
  userToken,
  call,
}: Props) => {
  const { useParticipants, useParticipantCount } = useCallStateHooks();
  const participants = useParticipants();
  const hostParticipant = participants.length > 0 ? participants[0] : null;
  const viewerCount = useParticipantCount();
  const [chatClient, setChatClient] = useState<StreamChat | null>(null);
  const [channel, setChannel] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [obsDialogBox, setObsDialogOpen] = useState(false);
  const { attendee } = useAttendeeStore();
  

  const handleEndStream = async () => {
    setLoading(true);
    try {
      call.stopLive({
        continue_recording:false
      });
      call.endCall();
      await changeWebinarStatus(webinar.id, "ENDED");
      toast.success("Webinar ended successfully");
      router.refresh();
    } catch (error) {
      console.error("Error ending webinar", error);
      toast.error("Failed to end webinar");
    } finally {
      setLoading(false);
    }
  };


  const handleCTAButtonClick = async () => {
    if (!channel) return;
    console.log("CTA button clicked", channel);
    await channel.sendEvent({
      type: "open_cta_dialog",
    });
  };
  




  
  useEffect(() => {
    const initChat = async () => {
      const client = StreamChat.getInstance(
        process.env.NEXT_PUBLIC_STREAM_API_KEY!
      );

      await client.connectUser(
        {
          id: userId,
          name: username,
        },
        userToken
      );

      const channel = client.channel("livestream", webinar.id);

      await channel.watch();

      setChatClient(client);
      setChannel(channel);
    };

    initChat();

    return () => {
      if (chatClient) {
        chatClient.disconnectUser();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, username, userToken, webinar.id, webinar.title]);

  useEffect(() => {
    if (chatClient && channel) {
      channel.on((event: any) => {
        if (event.type === "open_cta_dialog" && !isHost) {
          setDialogOpen(true);
        }
        if (event.type === 'start_live') {
          window.location.reload()
        }
      });
    }
  }, [chatClient, channel, isHost]);
  
  

  if (!chatClient || !channel) return null;

  return (
    <div className="flex flex-col w-full h-screen max-h-screen overflow-hidden bg-black text-white">
      {/* Header - kept compact */}
      <div className="py-2 px-4 border-b border-gray-800 flex items-center justify-between bg-[#0a0a0a]">
        <div className="flex items-center space-x-2">
          <div className="bg-red-500/10 text-red-400 px-3 py-1 rounded-full text-sm font-medium flex items-center border border-red-500/50">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 animate-pulse"></span>
            </span>
            LIVE
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 bg-[#0a0a0a] border border-gray-800 px-3 py-1 rounded-full text-gray-300">
            <Users size={16} />
            <span className="text-sm">{viewerCount}</span>
          </div>
          <button
            onClick={() => setShowChat(!showChat)}
            className={`px-3 py-1 rounded-full text-sm flex items-center space-x-1 transition-all ${
              showChat
                ? "bg-purple-500/20 text-purple-400 border border-purple-500/50"
                : "bg-[#0a0a0a] border border-gray-800 text-gray-300 hover:border-gray-700"
            }`}
          >
            <MessageSquare size={16} />
            <span>Chat</span>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 p-2 gap-2 overflow-hidden">
        {/* Video area */}
        <div className="flex-1 rounded-lg overflow-hidden border border-gray-800 flex flex-col bg-[#0a0a0a]">
          <div className="flex-1 relative overflow-hidden">
            {hostParticipant ? (
              <div className={`w-full h-full`}>
                <ParticipantView
                  participant={hostParticipant}
                  className="w-full h-full object-cover !max-w-full"
                />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 flex-col space-y-4">
                <div className="w-24 h-24 rounded-full bg-[#0a0a0a] border border-gray-800 flex items-center justify-center">
                  <Users size={40} className="text-gray-600" />
                </div>
                <p>Waiting for stream to start...</p>
              </div>
            )}

            {isHost && (
              <div className="absolute top-4 right-4 bg-[#0a0a0a]/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white border border-gray-800">
                Host
              </div>
            )}
          </div>

          <div className="p-2 border-t border-gray-800 flex items-center justify-between py-2 bg-[#0a0a0a]">
            <div className="flex items-center space-x-2">
              <div className="text-sm font-medium capitalize text-white">
                {webinar?.title}
              </div>
            </div>

            {isHost && (
              <div className="flex items-center space-x-1">
                  <Button
                    onClick={async () => {
                      await channel.sendEvent({
                        type: 'start_live',
                      })
                    }}
                    variant="outline"
                    className="mr-2 bg-[#0a0a0a] border-gray-700 text-white hover:bg-gray-900 hover:border-purple-500/50"
                  >
                    Go Live
                  </Button>
                
                <Button
                  onClick={() => setObsDialogOpen(true)}
                  variant="outline"
                  className="mr-2 bg-[#0a0a0a] border-gray-700 text-white hover:bg-gray-900 hover:border-purple-500/50"
                >
                  Get OBS Creds
                </Button>
                <Button 
                  onClick={handleEndStream} 
                  disabled={loading}
                  className="bg-[#0a0a0a] border-gray-700 text-white hover:bg-gray-900 hover:border-red-500/50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin mr-2" /> Loading...
                    </>
                  ) : (
                    "End Stream"
                  )}
                </Button>
                <Button 
                  onClick={handleCTAButtonClick}
                  className="bg-[#0a0a0a] border-gray-700 text-white hover:bg-gray-900 hover:border-purple-500/50"
                >
                  {webinar.ctaType === CtaTypeEnum.BOOK_A_CALL
                    ? "Book a Call"
                    : "Buy Now"}
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Chat panel */}
        {showChat && (
          <Chat client={chatClient}>
            <Channel channel={channel}>
              <div className="w-72 bg-[#0a0a0a] border border-gray-800 rounded-lg overflow-hidden flex flex-col">
                <div className="py-2 text-white px-3 border-b border-gray-800 font-medium flex items-center justify-between">
                  <span>Chat</span>
                  <span className="text-xs bg-[#0a0a0a] border border-gray-800 px-2 py-0.5 rounded-full text-gray-400">
                    {viewerCount} viewers
                  </span>
                </div>

                <MessageList />

                <div className="p-2 border-t border-gray-800">
                  <MessageInput />
                </div>
              </div>
            </Channel>
          </Chat>
        )}
      </div>
      {dialogOpen && (
        <CTADialogBox
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          webinar={webinar}
          userId={isHost ? userId : (attendee?.id || userId)}
        />
      )}
      {
        obsDialogBox && (
          <ObsDialogBox
            open={obsDialogBox}
            onOpenChange={setObsDialogOpen}
            rtmpURL={`rtmps://ingress.stream-io-video.com:443/${process.env.NEXT_PUBLIC_STREAM_API_KEY}.livestream.${webinar.id}`}
            streamKey={userToken}
          />
        )
      }
    </div>
  );
};

export default LiveWebinarView;

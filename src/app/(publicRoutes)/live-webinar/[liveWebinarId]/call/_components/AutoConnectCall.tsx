/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState, useRef } from "react";
import { Mic, MicOff, PhoneOff, Clock, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { vapi } from "@/lib/vapi/vapiClient";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { createCheckoutLink } from "@/action/stripe";
import { toast } from "sonner";
import { changeCallStatus } from "@/action/attendance";
import { CallStatusEnum } from "@prisma/client";
import { WebinarWithPresenter } from "@/lib/type";

// Simple call status enum
const CallStatus = {
  CONNECTING: "CONNECTING",
  ACTIVE: "ACTIVE",
  FINISHED: "FINISHED",
};

type Props = {
  userName?: string;
  assistantId: string;
  assistantName?: string;
  callTimeLimit?: number; 
  webinar:WebinarWithPresenter
  userId: string;
};

const AutoConnectCall = ({
  userName = "User",
  assistantId,
  assistantName = "Vapi Assistant",
  callTimeLimit = 180, // 3 minutes default
  webinar,
  userId,
}: Props) => {
  const [callStatus, setCallStatus] = useState(CallStatus.CONNECTING);
  const [assistantIsSpeaking, setAssistantIsSpeaking] = useState(false);
  const [userIsSpeaking, setUserIsSpeaking] = useState(false);
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(callTimeLimit);

  // Single ref for all timers and audio context
  const refs = useRef({
    countdownTimer: undefined as NodeJS.Timeout | undefined,
    audioStream: null as MediaStream | null,
    userSpeakingTimeout: undefined as NodeJS.Timeout | undefined,
  });

  // Simple audio setup for speech detection
  const setupAudio = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      refs.current.audioStream = stream;

      // Simple speech detection using AudioContext
      const audioContext = new (window.AudioContext || window.AudioContext)();
      const analyzer = audioContext.createAnalyser();
      analyzer.fftSize = 256;

      const microphone = audioContext.createMediaStreamSource(stream);
      microphone.connect(analyzer);

      // Monitor audio levels
      const checkAudioLevel = () => {
        const dataArray = new Uint8Array(analyzer.frequencyBinCount);
        analyzer.getByteFrequencyData(dataArray);

        // Calculate average volume
        const average =
          dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;
        const normalizedVolume = average / 256;

        // Detect speech based on volume
        if (normalizedVolume > 0.15 && !assistantIsSpeaking && !isMicMuted) {
          setUserIsSpeaking(true);

          // Clear previous timeout
          if (refs.current.userSpeakingTimeout) {
            clearTimeout(refs.current.userSpeakingTimeout);
          }

          // Reset after short delay
          refs.current.userSpeakingTimeout = setTimeout(() => {
            setUserIsSpeaking(false);
          }, 500);
        }

        // Continue monitoring
        requestAnimationFrame(checkAudioLevel);
      };

      checkAudioLevel();
    } catch (error) {
      console.error("Failed to initialize audio:", error);
    }
  };

  // Clean up all resources
  const cleanup = () => {
    if (refs.current.countdownTimer) {
      clearInterval(refs.current.countdownTimer);
      refs.current.countdownTimer = undefined;
    }

    if (refs.current.userSpeakingTimeout) {
      clearTimeout(refs.current.userSpeakingTimeout);
      refs.current.userSpeakingTimeout = undefined;
    }

    if (refs.current.audioStream) {
      refs.current.audioStream.getTracks().forEach((track) => track.stop());
      refs.current.audioStream = null;
    }
  };

  // Start the call
  const startCall = async () => {
    try {
      setCallStatus(CallStatus.CONNECTING);
      await vapi.start(assistantId);
      const res = await changeCallStatus(userId, CallStatusEnum.InProgress);
      if (!res.success) {
        throw new Error("Failed to update call status");
      }
      toast.success("Call started successfully");
    } catch (error) {
      console.error("Failed to start call:", error);
      toast.error("Failed to start call. Please try again.");
      setCallStatus(CallStatus.FINISHED);
    }
  };

  // Stop the call
  const stopCall = async () => {
    try {
      vapi.stop();
      setCallStatus(CallStatus.FINISHED);
      cleanup();
      const res = await changeCallStatus(userId, CallStatusEnum.COMPLETED);
      if (!res.success) {
        throw new Error("Failed to update call status");
      }
      toast.success("Call ended successfully");
    } catch (error) {
      console.error("Failed to stop call:", error);
      toast.error("Failed to stop call. Please try again.");
    }
  };

  // Toggle microphone mute
  const toggleMicMute = () => {
    if (refs.current.audioStream) {
      refs.current.audioStream.getAudioTracks().forEach((track) => {
        track.enabled = isMicMuted; // Toggle from current state
      });
    }
    setIsMicMuted(!isMicMuted);
  };

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const checkoutLink = async () => {
    try {
      if (!webinar?.priceId || !webinar?.presenter?.stripeConnectId) {
        return toast.error("No priceId or stripeConnectId found");
      }
      const session = await createCheckoutLink(
        webinar.priceId,
        webinar?.presenter?.stripeConnectId,
        userId,
        webinar.id

      );
      if (!session.sessionUrl) {
        throw new Error("Session ID not found in response");
      }

      window.open(session.sessionUrl, "_blank");
    } catch (error) {
      console.error("Error creating checkout link", error);
      toast.error("Failed to create checkout session. Please try again.");
    }
  };



  // Call setup & cleanup
  useEffect(() => {
    // Start the call immediately on mount
    startCall();
  }, []); // Empty dependency array means this runs once on mount

 
  // Setup event listeners
  useEffect(() => {
    // Call event handlers
    const onCallStart = async () => {
      console.log("Call started");
      setCallStatus(CallStatus.ACTIVE);
      setupAudio();

      // Start countdown timer from 3 minutes
      setTimeRemaining(callTimeLimit);
      refs.current.countdownTimer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(refs.current.countdownTimer);
            stopCall();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    };

    const onCallEnd = () => {
      console.log("Call ended - agent exited");
      setCallStatus(CallStatus.FINISHED);
      cleanup();
      // Don't redirect - let user stay on the page to see call ended message
      // The call status is already updated to COMPLETED in stopCall
    };

    const onSpeechStart = () => {
      setAssistantIsSpeaking(true);
    };

    const onSpeechEnd = () => {
      setAssistantIsSpeaking(false);
    };

    const onError = (error: Error) => {
      console.error("Vapi error:", error);
      setCallStatus(CallStatus.FINISHED);
      cleanup();
      // Don't redirect on error - let user see the error state
      toast.error(`Call error: ${error.message || "Unknown error occurred"}`);
    };

    // Set up event listeners
    vapi.on("call-start", onCallStart);
    vapi.on("call-end", onCallEnd);
    vapi.on("speech-start", onSpeechStart);
    vapi.on("speech-end", onSpeechEnd);
    vapi.on("error", onError);

    // Clean up event listeners
    return () => {
      vapi.off("call-start", onCallStart);
      vapi.off("call-end", onCallEnd);
      vapi.off("speech-start", onSpeechStart);
      vapi.off("speech-end", onSpeechEnd);
      vapi.off("error", onError);
    };
  }, [userName, callTimeLimit]);

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] bg-black">
      {/* Main call area */}
      <div className="flex-1 flex flex-col md:flex-row p-4 gap-4 relative">
        {/* AI Assistant */}
        <div className="flex-1 bg-[#0a0a0a] border border-gray-800 rounded-lg overflow-hidden relative">
          <div className="absolute top-4 left-4 bg-[#0a0a0a]/80 backdrop-blur-sm border border-gray-800 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2 z-10">
            <Mic
              className={cn(
                "h-4 w-4",
                assistantIsSpeaking ? "text-purple-400" : "text-gray-400"
              )}
            />
            <span>{assistantName}</span>
          </div>

          <div className="h-full flex items-center justify-center">
            <div className="relative">
              {/* Speaking animation rings */}
              {assistantIsSpeaking && (
                <>
                  <div
                    className="absolute inset-0 rounded-full border-4 border-purple-400 animate-ping opacity-20"
                    style={{ margin: "-8px" }}
                  />
                  <div
                    className="absolute inset-0 rounded-full border-4 border-purple-400 animate-ping opacity-10"
                    style={{ margin: "-16px", animationDelay: "0.5s" }}
                  />
                </>
              )}

              <div
                className={cn(
                  "flex justify-center items-center rounded-full overflow-hidden border-4 p-6",
                  assistantIsSpeaking
                    ? "border-purple-400"
                    : "border-gray-800"
                )}
              >
                <Bot className="w-[70px] h-[70px] text-purple-400" />
              </div>

              {assistantIsSpeaking && (
                <div className="absolute -bottom-2 -right-2 bg-purple-500 text-white p-2 rounded-full border border-purple-400">
                  <Mic className="h-5 w-5" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* User */}
        <div className="flex-1 bg-[#0a0a0a] border border-gray-800 rounded-lg overflow-hidden relative">
          <div className="absolute top-4 left-4 bg-[#0a0a0a]/80 backdrop-blur-sm border border-gray-800 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2 z-10">
            {isMicMuted ? (
              <>
                <MicOff className="h-4 w-4 text-red-400" />
                <span>Muted</span>
              </>
            ) : (
              <>
                <Mic
                  className={cn(
                    "h-4 w-4",
                    userIsSpeaking ? "text-emerald-400" : "text-gray-400"
                  )}
                />
                <span>{userName}</span>
              </>
            )}
          </div>

          {/* Call time remaining indicator */}
          <div className="absolute top-4 right-4 bg-[#0a0a0a]/80 backdrop-blur-sm border border-gray-800 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2 z-10">
            <Clock className="h-4 w-4" />
            <span>{formatTime(timeRemaining)}</span>
          </div>

          <div className="h-full flex items-center justify-center">
            <div className="relative">
              {/* User speaking animation */}
              {userIsSpeaking && !isMicMuted && (
                <>
                  <div
                    className="absolute inset-0 rounded-full border-4 border-emerald-400 animate-ping opacity-20"
                    style={{ margin: "-8px" }}
                  />
                </>
              )}

              <div
                className={cn(
                  "flex justify-center items-center rounded-full overflow-hidden border-4",
                  isMicMuted
                    ? "border-red-500/50"
                    : userIsSpeaking
                    ? "border-emerald-400"
                    : "border-gray-800"
                )}
              >
                <Avatar className="w-[100px] h-[100px]">
                  <AvatarImage src="/user-avatar.png" alt={userName} />
                  <AvatarFallback className="bg-gray-800 text-white">{userName.split("")?.[0]}</AvatarFallback>
                </Avatar>
              </div>

              {isMicMuted && (
                <div className="absolute -bottom-2 -right-2 bg-red-500 text-white p-2 rounded-full border border-red-400">
                  <MicOff className="h-5 w-5" />
                </div>
              )}

              {userIsSpeaking && !isMicMuted && (
                <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-2 rounded-full border border-emerald-400">
                  <Mic className="h-5 w-5" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call status overlay */}
        {callStatus === CallStatus.CONNECTING && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center flex-col gap-4 z-20">
            <div className="size-20 rounded-full border-4 border-t-transparent border-purple-400 animate-spin" />
            <h3 className="text-xl font-medium text-white">Connecting...</h3>
          </div>
        )}

        {callStatus === CallStatus.FINISHED && (
          <div className="absolute inset-0 bg-black/90 flex items-center justify-center flex-col gap-4 z-20">
            <h3 className="text-xl font-medium text-white">Call Ended</h3>
            <p className="text-gray-400">Time limit reached</p>
          </div>
        )}
      </div>

      {/* Call controls */}
      <div className="bg-[#0a0a0a] border-t border-gray-800 p-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between flex-wrap gap-3">
          {/* Call info */}
          <div className="flex items-center gap-2">
            {callStatus === CallStatus.ACTIVE && (
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <span
                  className={cn(
                    "text-sm font-medium",
                    timeRemaining < 30
                      ? "text-red-400 animate-pulse"
                      : timeRemaining < 60
                      ? "text-amber-400"
                      : "text-gray-400"
                  )}
                >
                  {formatTime(timeRemaining)} remaining
                </span>
              </div>
            )}
          </div>

          {/* Call actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleMicMute}
              className={cn(
                "p-3 rounded-full transition-all border",
                isMicMuted
                  ? "bg-red-500/10 text-red-400 border-red-500/50 hover:bg-red-500/20"
                  : "bg-[#0a0a0a] border-gray-700 text-white hover:bg-gray-900 hover:border-purple-500/50"
              )}
              disabled={callStatus !== CallStatus.ACTIVE}
            >
              {isMicMuted ? (
                <MicOff className="h-6 w-6" />
              ) : (
                <Mic className="h-6 w-6" />
              )}
            </button>

            <button
              onClick={stopCall}
              className="p-3 rounded-full bg-red-500/10 text-red-400 border border-red-500/50 hover:bg-red-500/20 transition-all"
              aria-label="End call"
              disabled={callStatus !== CallStatus.ACTIVE}
            >
              <PhoneOff className="h-6 w-6" />
            </button>
          </div>

          <Button 
            onClick={checkoutLink} 
            variant={"outline"}
            className="bg-[#0a0a0a] border-gray-700 text-white hover:bg-gray-900 hover:border-purple-500/50"
          >
            Buy Now
          </Button>

          {/* Right side info */}
          <div className="hidden md:block">
            {callStatus === CallStatus.ACTIVE && timeRemaining < 30 && (
              <span className="text-red-400 font-medium">
                Call ending soon
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoConnectCall;

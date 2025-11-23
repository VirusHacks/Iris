"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Statically assign environment variables at build time
const apiKey = process.env.NEXT_PUBLIC_TAVUS_API_KEY;
const replicaId = process.env.NEXT_PUBLIC_TAVUS_REPLICA_ID;
const personaId = process.env.NEXT_PUBLIC_TAVUS_PERSONA_ID;

interface ContextData {
  personaId: string;
  personaName: string;
  websiteUrl: string;
  createdAt: string;
  contextSize: number;
  pagesIncluded: number;
  knowledgeBase: string;
  scrapedContent: string;
}

export default function TavusChatbot() {
  const [conversationUrl, setConversationUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [, setContextData] = useState<ContextData | null>(null);

  // Start Tavus conversation on mount
  useEffect(() => {
    startConversation();
  }, []);

  const startConversation = async () => {
    setLoading(true);
    setError("");

    try {
      console.log("🔧 Starting Tavus conversation...");

      if (!apiKey || !replicaId) {
        throw new Error(
          "Missing Tavus configuration. Please check your environment variables."
        );
      }

      let conversationalContext =
        "You are a helpful AI sales assistant for a CRM platform. You help sales employees understand their performance metrics, customer insights, and provide strategic guidance to improve their sales outcomes.";

      try {
        const contextResponse = await fetch(
          "/tavus-context/current-context.json"
        );
        if (contextResponse.ok) {
          const data = await contextResponse.json();
          setContextData(data);

          if (data.knowledgeBase) {
            conversationalContext = `You are an AI sales assistant integrated into a professional CRM platform. 
            
You help sales employees by providing:
- Performance insights and analytics guidance
- Customer relationship strategies
- Sales pipeline optimization tips
- Data-driven recommendations

${data.knowledgeBase}

${data.scrapedContent || ""}

Always be professional, concise, and action-oriented. Focus on helping sales employees achieve their goals.`;
          }
        }
      } catch {
        console.log("Using default CRM sales context");
      }

      const requestBody: Record<string, unknown> = {
        replica_id: replicaId,
        conversation_name: "Sales AI Assistant",
        conversational_context: conversationalContext,
        custom_greeting:
          "Hello! I'm your AI sales assistant. I'm here to help you understand your performance, provide insights on your customers, and guide you toward better sales outcomes. How can I assist you today?",
        properties: {
          enable_recording: false,
          enable_closed_captions: true,
        },
      };

      if (personaId) {
        requestBody.persona_id = personaId;
      }

      const response = await fetch("https://tavusapi.com/v2/conversations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
        body: JSON.stringify(requestBody),
      });
      // Debug: log minimal request info (do NOT log apiKey)
      console.log(
        "Tavus request: replicaId=",
        replicaId,
        "personaId=",
        personaId ?? "(none)"
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error(
          "Tavus API responded with status",
          response.status,
          "body:",
          errorText
        );

        // Build a helpful error message for UI display
        let errorMessage = `Tavus API ${response.status}: ${
          errorText || "Unexpected response"
        }`;
        try {
          const errorData = JSON.parse(errorText);
          if (errorData.message?.includes("maximum concurrent conversations")) {
            errorMessage =
              "Another conversation is active. Please wait a moment and try again.";
          } else if (errorData.message) {
            errorMessage = `Tavus API ${response.status}: ${errorData.message}`;
          }
        } catch {
          // leave errorMessage as-is when parsing fails
        }

        // Surface the error to the UI instead of throwing, so the user sees the API body
        setError(errorMessage);
        setLoading(false);
        return;
      }

      const data = await response.json();
      setConversationUrl(data.conversation_url);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to start conversation"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center w-full max-w-[1400px] mx-auto px-6 pt-12 pb-12">
        {/* Hero Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 leading-[0.9] tracking-tight">
            What if you could talk to your <br />
            <span className="italic">sales data</span> like a{" "}
            <span className="italic">sidekick</span>?
          </h1>
        </motion.div>

        {/* Central Content Box (The "Video" Reference) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-5xl flex-1 min-h-[600px] border border-white bg-[#111] relative flex flex-col"
        >
          {/* Box Header */}
          <div className="h-10 border-b border-white bg-white flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <span className="text-black text-xs font-bold uppercase tracking-wider">
                Meet Vinay • Your 24/7 Assistant to all things Sales.
              </span>
            </div>
            <div className="flex gap-1">
              <div className="w-3 h-3 border border-black rounded-full" />
              <div className="w-3 h-3 border border-black rounded-full" />
            </div>
          </div>

          {/* Video/Content Area */}
          <div className="flex-1 relative bg-black overflow-hidden group">
            {/* Grid Background Effect */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mb-6" />
                <p className="text-white/60 uppercase tracking-widest text-xs">
                  Connecting to Neural Network...
                </p>
              </div>
            )}

            {error && (
              <div className="absolute inset-0 flex items-center justify-center z-20 p-12">
                <div className="text-center max-w-md border border-white/20 bg-black/80 p-8 backdrop-blur-md">
                  <p className="text-red-500 font-mono mb-4">{error}</p>
                  <button
                    onClick={startConversation}
                    className="px-6 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200"
                  >
                    Retry Connection
                  </button>
                </div>
              </div>
            )}

            {/* Tavus Iframe */}
            {conversationUrl && !loading && !error && (
              <iframe
                src={conversationUrl}
                className="absolute inset-0 w-full h-full"
                allow="camera; microphone; display-capture"
              />
            )}

            {/* CRM Overlay Data (Subtle, only visible when active or per request) */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent pointer-events-none" />
          </div>

          {/* Box Footer Stats */}
          <div className="h-12 border-t border-white/20 bg-[#0a0a0a] flex items-center px-6 justify-between">
            <div className="flex items-center gap-8 text-xs font-mono text-white/60">
              <span>LATENCY: 24ms</span>
              <span>STATUS: CONNECTED</span>
              <span>VOICE: ACTIVE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-green-500">
                ONLINE
              </span>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Bottom Bar / Footer */}
      <div className="fixed bottom-6 left-6 hidden xl:block">
        <div className="w-12 h-12 rounded-full bg-[#ff0055] flex items-center justify-center border-2 border-black shadow-[0_0_0_2px_#fff]">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
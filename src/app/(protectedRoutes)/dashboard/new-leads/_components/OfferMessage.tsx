"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Send, MessageSquare, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

type Props = {
  totalLeads: number;
};

export default function OfferMessage({ totalLeads }: Props) {
  const [offerMessage, setOfferMessage] = useState(
    "🎉 Special Offer! Get 20% off on your first purchase. Limited time only!"
  );
  const [sendToAll, setSendToAll] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSend = async () => {
    if (!offerMessage.trim()) {
      toast.error("Please enter an offer message");
      return;
    }

    if (sendToAll) {
      setIsSending(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success(`Offer message sent to all ${totalLeads} contacts!`);
      setIsSending(false);
    } else {
      toast.info("Offer message ready. Select 'Send to all contacts' to send.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ scale: 1.01 }}
    >
      <Card className="bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300 overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <CardHeader className="border-b border-gray-800/50 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-500/30">
              <MessageSquare className="h-5 w-5 text-purple-400" />
            </div>
            <div>
              <CardTitle className="text-base font-bold text-white">New Offer Message</CardTitle>
              <CardDescription className="text-gray-400 text-xs mt-0.5">
                Create and send a special offer to your leads
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-4 relative z-10">
          <div className="space-y-2">
            <Label htmlFor="offer-message" className="text-sm font-semibold text-gray-300 flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-purple-400" />
              Offer Message
            </Label>
            <Textarea
              id="offer-message"
              value={offerMessage}
              onChange={(e) => setOfferMessage(e.target.value)}
              placeholder="Enter your offer message here..."
              className="bg-black/50 border-gray-700/50 text-white placeholder:text-gray-500 min-h-[120px] resize-none focus:border-purple-500/50 transition-colors"
            />
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-3 pt-3 border-t border-gray-800/50 p-3 rounded-lg bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-blue-500/10"
          >
            <Checkbox
              id="send-to-all"
              checked={sendToAll}
              onCheckedChange={(checked) => setSendToAll(checked as boolean)}
              className="border-gray-600 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-500 data-[state=checked]:to-blue-500 data-[state=checked]:border-purple-500"
            />
            <Label
              htmlFor="send-to-all"
              className="text-sm font-medium text-gray-300 cursor-pointer flex-1"
            >
              Send offer message to all <span className="font-bold text-blue-400">{totalLeads}</span> contacts
            </Label>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={handleSend}
              disabled={isSending}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold shadow-lg shadow-purple-500/20 transition-all duration-300"
            >
              {isSending ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Send className="h-4 w-4 mr-2" />
                  </motion.div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  {sendToAll ? `Send to All ${totalLeads} Contacts` : "Save Offer Message"}
                </>
              )}
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}


"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { Users, Mail, Calendar, Tag, Phone } from "lucide-react";
import { motion } from "framer-motion";

type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
};

type Props = {
  leads: Lead[];
};

export default function NewLeadsList({ leads }: Props) {
  if (leads.length === 0) {
    return (
      <Card className="bg-[#0a0a0a] border border-gray-800">
        <CardContent className="p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center h-[400px] gap-4"
          >
            <Users className="w-16 h-16 text-gray-600" />
            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold text-white">
                No new leads yet
              </h3>
              <p className="text-sm text-gray-400 max-w-md">
                New leads from the last 30 days will appear here. Upload a CSV
                file to get started!
              </p>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] border border-gray-800/50 overflow-hidden">
        <CardHeader className="border-b border-gray-800/50 bg-gradient-to-r from-blue-500/5 to-purple-500/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30">
                <Users className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold text-white">
                  New Leads
                </CardTitle>
                <p className="text-xs text-gray-400 mt-1">
                  Recently acquired customer data
                </p>
              </div>
            </div>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20"
            >
              <span className="text-sm font-semibold text-blue-400">
                {leads.length}
              </span>
              <span className="text-xs text-gray-400 ml-1">leads</span>
            </motion.div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="max-h-[600px] overflow-y-auto scrollbar-hide">
            <Table>
              <TableHeader className="sticky top-0 z-10 bg-[#0a0a0a] border-b border-gray-800/50">
                <TableRow className="hover:bg-transparent">
                  <TableHead className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Name
                  </TableHead>
                  <TableHead className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Phone
                  </TableHead>
                  <TableHead className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Tags
                  </TableHead>
                  <TableHead className="text-xs font-semibold text-gray-400 uppercase tracking-wider text-right">
                    Date
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead, index) => (
                  <motion.tr
                    key={lead.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                    className="border-b border-gray-800/30 group cursor-pointer transition-colors"
                  >
                    <TableCell className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center text-xs font-bold text-blue-400">
                          {lead.name.charAt(0).toUpperCase()}
                        </div>
                        <span className="font-semibold text-sm text-white group-hover:text-blue-400 transition-colors">
                          {lead.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Phone className="h-3 w-3" />
                        {lead.phone}
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex gap-1.5 flex-wrap">
                        {lead.tags && lead.tags.length > 0 ? (
                          lead.tags.slice(0, 2).map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="outline"
                              className="text-[10px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/30 text-blue-300 px-2 py-0.5"
                            >
                              <Tag className="h-2.5 w-2.5 mr-1" />
                              {tag}
                            </Badge>
                          ))
                        ) : (
                          <span className="text-xs text-gray-500">No tags</span>
                        )}
                        {lead.tags && lead.tags.length > 2 && (
                          <Badge
                            variant="outline"
                            className="text-[10px] bg-gray-800/50 border-gray-700 text-gray-400 px-2 py-0.5"
                          >
                            +{lead.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="py-4 text-right">
                      <div className="flex items-center justify-end gap-2 text-xs text-gray-400">
                        <Calendar className="h-3 w-3" />
                        {format(new Date(lead.createdAt), "MMM d, yyyy")}
                      </div>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

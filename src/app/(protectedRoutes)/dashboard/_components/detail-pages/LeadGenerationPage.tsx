"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, Sparkles, MapPin, Globe, TrendingUp, Target, Zap, MessageSquare, Linkedin, Search, Mail, Users, Calendar, Lightbulb, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Chatbot from "./Chatbot";

interface LeadAnalysis {
  summary: string;
  topGeographicOpportunities: Array<{
    country: string;
    reason: string;
    potentialLeads: string;
    strategy: string;
  }>;
  topChannels: Array<{
    channel: string;
    priority: "High" | "Medium" | "Low";
    reason: string;
    expectedROI: string;
    actionSteps: string[];
  }>;
  bestTiming: {
    dayOfWeek: string;
    timeOfDay: string;
    seasonalTrends: string;
    recommendation: string;
  };
  targetAudience: {
    industry: string;
    companySize: string;
    geographicFocus: string;
    persona: string;
  };
  leadGenerationStrategies: Array<{
    strategy: string;
    description: string;
    channels: string[];
    expectedResults: string;
    implementationDifficulty: "Easy" | "Medium" | "Hard";
  }>;
  quickWins: Array<{
    action: string;
    impact: string;
    effort: "Low" | "Medium" | "High";
    timeline: string;
  }>;
  insights: string[];
}

const getChannelIcon = (channel: string) => {
  const lower = channel.toLowerCase();
  if (lower.includes("linkedin")) return Linkedin;
  if (lower.includes("google") || lower.includes("ads") || lower.includes("search")) return Search;
  if (lower.includes("email") || lower.includes("mail")) return Mail;
  if (lower.includes("social") || lower.includes("facebook") || lower.includes("twitter")) return MessageSquare;
  return Users;
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "bg-red-500/20 text-red-400 border-red-500/50";
    case "Medium":
      return "bg-amber-500/20 text-amber-400 border-amber-500/50";
    case "Low":
      return "bg-blue-500/20 text-blue-400 border-blue-500/50";
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/50";
  }
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy":
      return "bg-emerald-500/20 text-emerald-400 border-emerald-500/50";
    case "Medium":
      return "bg-amber-500/20 text-amber-400 border-amber-500/50";
    case "Hard":
      return "bg-red-500/20 text-red-400 border-red-500/50";
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/50";
  }
};

export default function LeadGenerationPage() {
  const [analysis, setAnalysis] = useState<LeadAnalysis | null>(null);
  const [loading, setLoading] = useState(true);
  const [rawData, setRawData] = useState<any>(null);

  useEffect(() => {
    analyzeLeadSources();
  }, []);

  const analyzeLeadSources = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/leads/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ analysisType: "comprehensive" }),
      });

      const result = await response.json();
      if (result.success) {
        setAnalysis(result.analysis);
        setRawData(result.rawData);
        toast.success("Lead generation analysis completed!");
      } else {
        throw new Error(result.error || "Failed to analyze");
      }
    } catch (error: any) {
      console.error("Analysis error:", error);
      toast.error("Failed to analyze lead sources");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-purple-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="w-full">
        {/* Header */}
        <div className="border-b border-border/50 bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-transparent px-6 py-4">
          <div className="max-w-[1920px] mx-auto">
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
              <Target className="h-8 w-8 text-purple-400" />
              Lead Generation Hub
            </h1>
            <p className="text-muted-foreground mt-1">
              AI-powered insights to find and convert the best leads
            </p>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* AI Summary */}
          {analysis && (
            <Card className="bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-purple-500/10 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-400" />
                  AI-Powered Lead Generation Insights
                </CardTitle>
                <CardDescription>Personalized recommendations based on your customer data</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed mb-4">{analysis.summary}</p>
                <Button
                  variant="outline"
                  onClick={analyzeLeadSources}
                  className="mt-2"
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  Refresh Analysis
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Quick Wins */}
          {analysis && analysis.quickWins && analysis.quickWins.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold flex items-center gap-2">
                  <Zap className="h-5 w-5 text-amber-400" />
                  Quick Wins
                </CardTitle>
                <CardDescription>High-impact actions you can take immediately</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {analysis.quickWins.map((win, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold">{win.action}</h4>
                        <Badge
                          variant="outline"
                          className={
                            win.effort === "Low"
                              ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/50"
                              : win.effort === "Medium"
                              ? "bg-amber-500/20 text-amber-400 border-amber-500/50"
                              : "bg-red-500/20 text-red-400 border-red-500/50"
                          }
                        >
                          {win.effort} Effort
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{win.impact}</p>
                      <p className="text-xs text-muted-foreground">Timeline: {win.timeline}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Main Content Tabs */}
          <Tabs defaultValue="geographic" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="geographic" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Geographic
              </TabsTrigger>
              <TabsTrigger value="channels" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Channels
              </TabsTrigger>
              <TabsTrigger value="strategies" className="flex items-center gap-2">
                <Lightbulb className="h-4 w-4" />
                Strategies
              </TabsTrigger>
              <TabsTrigger value="assistant" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                AI Assistant
              </TabsTrigger>
            </TabsList>

            {/* Geographic Opportunities */}
            <TabsContent value="geographic" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-bold flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-purple-400" />
                    Top Geographic Opportunities
                  </CardTitle>
                  <CardDescription>Countries and regions with highest lead potential</CardDescription>
                </CardHeader>
                <CardContent>
                  {analysis && analysis.topGeographicOpportunities ? (
                    <div className="space-y-4">
                      {analysis.topGeographicOpportunities.map((opp, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-colors"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                                <Globe className="h-5 w-5 text-purple-400" />
                              </div>
                              <div>
                                <h3 className="font-bold text-lg">{opp.country}</h3>
                                <p className="text-sm text-muted-foreground">{opp.potentialLeads} potential leads</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">
                              Opportunity
                            </Badge>
                          </div>
                          <p className="text-sm mb-2">{opp.reason}</p>
                          <div className="mt-3 p-3 rounded-lg bg-background/50 border border-border/50">
                            <p className="text-xs font-medium text-muted-foreground mb-1">Recommended Strategy:</p>
                            <p className="text-sm">{opp.strategy}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <Globe className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No geographic data available</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Timing Insights */}
              {analysis && analysis.bestTiming && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-purple-400" />
                      Best Timing for Lead Generation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                        <div className="text-sm text-muted-foreground mb-1">Best Day</div>
                        <div className="text-xl font-bold">{analysis.bestTiming.dayOfWeek}</div>
                      </div>
                      <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                        <div className="text-sm text-muted-foreground mb-1">Best Time</div>
                        <div className="text-xl font-bold">{analysis.bestTiming.timeOfDay}</div>
                      </div>
                      <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                        <div className="text-sm text-muted-foreground mb-1">Seasonal Trend</div>
                        <div className="text-xl font-bold">{analysis.bestTiming.seasonalTrends}</div>
                      </div>
                    </div>
                    <div className="mt-4 p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                      <p className="text-sm font-medium">💡 Recommendation:</p>
                      <p className="text-sm mt-1">{analysis.bestTiming.recommendation}</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Channel Recommendations */}
            <TabsContent value="channels" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-bold flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-purple-400" />
                    Recommended Lead Generation Channels
                  </CardTitle>
                  <CardDescription>Best channels to reach your target audience</CardDescription>
                </CardHeader>
                <CardContent>
                  {analysis && analysis.topChannels ? (
                    <div className="space-y-4">
                      {analysis.topChannels.map((channel, index) => {
                        const Icon = getChannelIcon(channel.channel);
                        return (
                          <div
                            key={index}
                            className="p-6 rounded-lg bg-gradient-to-r from-card to-card/80 border border-border/50 hover:border-purple-500/40 transition-all"
                          >
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                  <Icon className="h-6 w-6 text-purple-400" />
                                </div>
                                <div>
                                  <h3 className="font-bold text-xl">{channel.channel}</h3>
                                  <p className="text-sm text-muted-foreground">{channel.reason}</p>
                                </div>
                              </div>
                              <Badge className={getPriorityColor(channel.priority)}>
                                {channel.priority} Priority
                              </Badge>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                              <div className="p-3 rounded-lg bg-muted/30 border border-border/50">
                                <div className="text-xs text-muted-foreground mb-1">Expected ROI</div>
                                <div className="text-sm font-semibold text-emerald-400">{channel.expectedROI}</div>
                              </div>
                            </div>

                            <div className="mt-4">
                              <p className="text-sm font-medium mb-2">Action Steps:</p>
                              <ul className="space-y-2">
                                {channel.actionSteps.map((step, stepIndex) => (
                                  <li key={stepIndex} className="flex items-start gap-2 text-sm">
                                    <ArrowRight className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                                    <span>{step}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No channel recommendations available</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Target Audience */}
              {analysis && analysis.targetAudience && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold flex items-center gap-2">
                      <Target className="h-5 w-5 text-purple-400" />
                      Target Audience Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                        <div className="text-sm text-muted-foreground mb-1">Industry Focus</div>
                        <div className="text-lg font-bold">{analysis.targetAudience.industry}</div>
                      </div>
                      <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                        <div className="text-sm text-muted-foreground mb-1">Company Size</div>
                        <div className="text-lg font-bold">{analysis.targetAudience.companySize}</div>
                      </div>
                      <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                        <div className="text-sm text-muted-foreground mb-1">Geographic Focus</div>
                        <div className="text-lg font-bold">{analysis.targetAudience.geographicFocus}</div>
                      </div>
                      <div className="p-4 rounded-lg bg-muted/30 border border-border/50 md:col-span-2">
                        <div className="text-sm text-muted-foreground mb-1">Ideal Customer Persona</div>
                        <div className="text-sm">{analysis.targetAudience.persona}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Strategies */}
            <TabsContent value="strategies" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-bold flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-purple-400" />
                    Lead Generation Strategies
                  </CardTitle>
                  <CardDescription>Comprehensive strategies to grow your lead pipeline</CardDescription>
                </CardHeader>
                <CardContent>
                  {analysis && analysis.leadGenerationStrategies ? (
                    <div className="space-y-4">
                      {analysis.leadGenerationStrategies.map((strategy, index) => (
                        <div
                          key={index}
                          className="p-6 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="font-bold text-xl">{strategy.strategy}</h3>
                            <Badge className={getDifficultyColor(strategy.implementationDifficulty)}>
                              {strategy.implementationDifficulty}
                            </Badge>
                          </div>
                          <p className="text-sm mb-4">{strategy.description}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-xs font-medium text-muted-foreground mb-2">Channels:</p>
                              <div className="flex flex-wrap gap-2">
                                {strategy.channels.map((channel, chIndex) => (
                                  <Badge key={chIndex} variant="outline" className="text-xs">
                                    {channel}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-muted-foreground mb-2">Expected Results:</p>
                              <p className="text-sm font-semibold text-emerald-400">{strategy.expectedResults}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <Lightbulb className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No strategies available</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Key Insights */}
              {analysis && analysis.insights && analysis.insights.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-purple-400" />
                      Key Insights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {analysis.insights.map((insight, index) => (
                        <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/50">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                          <span className="text-sm">{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* AI Assistant */}
            <TabsContent value="assistant" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-bold flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-purple-400" />
                    Lead Generation Assistant
                  </CardTitle>
                  <CardDescription>Ask questions about lead generation strategies and get AI-powered answers</CardDescription>
                </CardHeader>
                <CardContent>
                  <Chatbot
                    systemMessage={`You are an expert lead generation strategist. Help users find the best ways to generate leads for their business. Use the following context:

${analysis ? `
Current Analysis:
- Summary: ${analysis.summary}
- Top Countries: ${analysis.topGeographicOpportunities?.map(o => o.country).join(", ") || "N/A"}
- Top Channels: ${analysis.topChannels?.map(c => c.channel).join(", ") || "N/A"}
- Best Timing: ${analysis.bestTiming?.recommendation || "N/A"}
- Target Audience: ${analysis.targetAudience?.persona || "N/A"}
` : "No analysis data available yet."}

Provide actionable, specific advice. Focus on:
- Data-driven recommendations
- Practical implementation steps
- Multiple channel options
- Realistic expectations
- ROI considerations`}
                    contextData={analysis || {}}
                    pageTitle="Lead Generation"
                    isOpen={true}
                    onClose={() => {}}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}


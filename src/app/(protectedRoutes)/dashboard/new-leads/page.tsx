import { onAuthenticateUser } from "@/action/auth";
import { redirect } from "next/navigation";
import { getNewLeads, getConversionStats } from "@/action/newLeads";
import NewLeadsList from "./_components/NewLeadsList";
import ConversionRateChart from "./_components/ConversionRateChart";
import OfferMessage from "./_components/OfferMessage";
import CSVUploadBar from "./_components/CSVUploadBar";
import CreditsStats from "./_components/CreditsStats";
import LeadConversionFunnel from "./_components/LeadConversionFunnel";

export const dynamic = 'force-dynamic';

const NewLeadsPage = async () => {
  const checkUser = await onAuthenticateUser();
  if (!checkUser.user) {
    redirect("/sign-in");
  }

  const leadsResponse = await getNewLeads();
  const statsResponse = await getConversionStats();

  if (leadsResponse.status === 403 || statsResponse.status === 403) {
    redirect("/sign-in");
  }

  const leads = leadsResponse.status === 200 ? leadsResponse.leads : [];
  const stats = statsResponse.status === 200 ? statsResponse.stats : {
    totalLeads: 0,
    contactedLeads: 0,
    qualifiedLeads: 0,
    convertedLeads: 0,
    conversionRate: 0,
    creditsEarned: 0,
  };

  return (
    <div className="w-full min-h-screen bg-black space-y-6 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Header Row with Stats */}
      <div className="flex items-center justify-between gap-6 flex-wrap pt-6">
        <div className="flex-1 min-w-[280px]">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            New Leads Management
          </h1>
          <p className="text-gray-400 text-sm">
            Manage and convert your new customer leads with powerful insights
          </p>
        </div>
        <CreditsStats
          creditsEarned={stats?.creditsEarned ?? 0}
          clientsConverted={stats?.convertedLeads ?? 0}
          conversionRate={stats?.conversionRate ?? 0}
        />
      </div>

      {/* Main Content - Leads List + CSV Upload */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side - New Leads List (2 columns) */}
        <div className="lg:col-span-2 space-y-6">
          <NewLeadsList leads={leads} />
          <LeadConversionFunnel
            totalLeads={stats?.totalLeads ?? 0}
            contactedLeads={stats?.contactedLeads ?? 0}
            qualifiedLeads={stats?.qualifiedLeads ?? 0}
            convertedLeads={stats?.convertedLeads ?? 0}
          />
        </div>

        {/* Right Side - CSV Upload + Conversion Chart (1 column) */}
        <div className="space-y-6">
          <CSVUploadBar />
          <ConversionRateChart
            totalLeads={stats?.totalLeads ?? 0}
            convertedLeads={stats?.convertedLeads ?? 0}
            conversionRate={stats?.conversionRate ?? 0}
          />
          <OfferMessage totalLeads={leads.length} />
        </div>
      </div>
    </div>
  );
};

export default NewLeadsPage;


'use client'
import { usePathname, useRouter } from 'next/navigation'
import PurpleIcon from '../PurpleIcon'
import LightningIcon from '@/icons/LightningIcon'
import CreateWebinarButton from '../CreateWebinar'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Home, BarChart3, Users, Target, MessageSquare } from 'lucide-react'
import { AiAgents, User } from '@prisma/client'
import { Stripe } from 'stripe'

type Props = {
  assistants: AiAgents[] | []
  user: User
  stripeProducts: Stripe.Product[] | []
}

const Header = ({ assistants, stripeProducts }: Props) => {
  const pathname = usePathname()
  const router = useRouter()

  // Navigation links for navbar
  const navLinks = [
    { label: "Home", route: "/home", icon: Home },
    { label: "Dashboard", route: "/dashboard", icon: BarChart3 },
    { label: "Customers", route: "/dashboard/customers", icon: Users },
    { label: "Lead Generation", route: "/dashboard/leads", icon: Target },
    { label: "Assistant", route: "/assistant", icon: MessageSquare },
  ];

  const getPageTitle = () => {
    if (pathname?.includes('pipeline')) return null;
    if (pathname?.includes('dashboard/customers')) return 'Customers';
    if (pathname?.includes('dashboard/leads')) return 'Lead Generation';
    if (pathname?.includes('dashboard')) return 'Dashboard';
    if (pathname?.includes('assistant')) return 'Assistant';
    return pathname?.split('/')[1]?.charAt(0).toUpperCase() + pathname?.split('/')[1]?.slice(1) || 'Home';
  };

  return (
    <div className="w-full p-4 sticky top-5 z-10 flex justify-between items-center flex-wrap gap-4 border border-border/40 backdrop-blur-2xl rounded-full">
      <div className="flex items-center gap-4 flex-wrap">
        {pathname?.includes('pipeline') ? (
          <Button
            className="bg-primary/10 border border-border rounded-xl"
            variant="outline"
            onClick={() => router.push('/webinars')}
          >
            <ArrowLeft /> Back to Webinars
          </Button>
        ) : (
          <>
            <div className="px-4 py-2 flex justify-center text-bold items-center rounded-xl bg-background border border-border text-primary capitalize">
              {getPageTitle()}
            </div>
            {/* Navigation Links */}
            <div className="flex items-center gap-2 flex-wrap">
              {navLinks.map((link) => {
                const isActive = pathname === link.route || (link.route !== "/home" && pathname?.startsWith(link.route));
                const Icon = link.icon;
                return (
                  <Button
                    key={link.route}
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    onClick={() => router.push(link.route)}
                    className={`text-xs flex items-center gap-1.5 ${isActive ? 'bg-purple-500/20 text-purple-400 border-purple-500/50' : 'hover:bg-muted'}`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">{link.label}</span>
                  </Button>
                );
              })}
            </div>
          </>
        )}
      </div>

      <div className="flex gap-6 items-center flex-wrap">
        <PurpleIcon>
          <LightningIcon />
        </PurpleIcon>
        <CreateWebinarButton
          assistants={assistants}
          stripeProducts={stripeProducts}
        />
      </div>
    </div>
  )
}

export default Header

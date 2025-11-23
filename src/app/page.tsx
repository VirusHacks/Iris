'use client'

import { Header } from '@/components/landing/Header'
import { Hero } from '@/components/landing/Hero'
import { LogoTicker } from '@/components/landing/LogoTicker'
import { Features } from '@/components/landing/Features'
import { Testimonial } from '@/components/landing/Testimonial'
import { CallToAction } from '@/components/landing/CallToAction'
import { Footer } from '@/components/landing/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
  )
}

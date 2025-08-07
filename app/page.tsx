import { HeroSection } from '@/components/sections/hero-section'
import { PreDepositSection } from '@/components/sections/predeposit-section'
import { HowItWorksSection } from '@/components/sections/how-it-works-section'
import { StatsSection } from '@/components/sections/stats-section'
import { RoadmapSection } from '@/components/sections/roadmap-section'
import { CTASection } from '@/components/sections/cta-section'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <PreDepositSection />
        <HowItWorksSection />
        <StatsSection />
        <RoadmapSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
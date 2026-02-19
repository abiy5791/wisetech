import { PageLayout } from "@/components/page-layout"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { BenefitsSection } from "@/components/home/benefits-section"
import { SecuritySolutionsSection } from "@/components/home/security-solutions-section"
import { StatsSection } from "@/components/home/stats-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { LogosSection } from "@/components/home/logos-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <FeaturesSection />
      <SecuritySolutionsSection />
      <BenefitsSection />
      <StatsSection />
      <TestimonialsSection />
      <LogosSection />
      <HowItWorksSection />
      <CTASection />
    </PageLayout>
  )
}

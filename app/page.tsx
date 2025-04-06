import Hero from "@/components/hero"
import FeatureGrid from "@/components/feature-grid"
import GoogleIntegrations from "@/components/google-integrations"
import SectionWrapper from "@/components/section-wrapper"
import TestimonialsSection from "@/components/testimonials-section"
import HowItWorks from "@/components/how-it-works"
import ComparisonTable from "@/components/comparison-table"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "LoopedIn – Your All-in-One Tech Career Platform",
  description: "50+ AI-powered tools to help you learn, build, grow, and land your dream job.",
}

export default function Home() {
  return (
    <main>
      <SectionWrapper>
        <Hero />
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <FeatureGrid title="Powerful Tools for Every Stage of Your Tech Career" showViewAllLink={true} />
      </SectionWrapper>

      <HowItWorks />

      <SectionWrapper className="bg-gray-50">
        <GoogleIntegrations />
      </SectionWrapper>

      <TestimonialsSection />

      <ComparisonTable />
    </main>
  )
}


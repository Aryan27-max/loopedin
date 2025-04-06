import FeatureGrid from "@/components/feature-grid"
import SectionWrapper from "@/components/section-wrapper"
import FeatureSearch from "@/components/feature-search"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "All Features - LoopedIn",
  description: "Explore 50+ AI-powered tools to help you learn, build, grow, and land your dream job.",
}

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <SectionWrapper className="bg-white pt-24 md:pt-32">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-medium mb-6">All Features</h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-12">
            Explore our comprehensive suite of 50+ AI-powered tools designed to accelerate your tech career.
          </p>

          <FeatureSearch />

          <FeatureGrid title="" showAllFeatures={true} showCategories={true} />
        </div>
      </SectionWrapper>
    </main>
  )
}


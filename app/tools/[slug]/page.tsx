import { notFound } from "next/navigation"
import { getAllTools, getToolBySlug } from "@/lib/tools"
import SectionWrapper from "@/components/section-wrapper"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import RelatedTools from "@/components/related-tools"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tool = getToolBySlug(params.slug)

  if (!tool) {
    return {
      title: "Tool Not Found - LoopedIn",
    }
  }

  return {
    title: `${tool.name} - LoopedIn`,
    description: tool.description,
  }
}

export async function generateStaticParams() {
  const tools = getAllTools()
  return tools.map((tool) => ({
    slug: tool.slug,
  }))
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = getToolBySlug(params.slug)

  if (!tool) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <SectionWrapper className="bg-white pt-24 md:pt-32">
        <div className="container mx-auto px-4">
          <Link
            href="/features"
            className="inline-flex items-center text-blue-600 mb-8 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all tools
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-blue-100 mr-3">{tool.icon}</div>
                <span className="text-sm font-medium px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
                  {tool.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-medium mb-6">{tool.name}</h1>

              <p className="text-xl text-gray-600 mb-8">{tool.description}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                  Try {tool.name}
                </Button>
                <Button size="lg" variant="outline" className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  View Documentation
                </Button>
              </div>

              <div className="border-t border-gray-200 pt-8 mt-8">
                <h2 className="text-2xl font-medium mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {tool.features?.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl p-6 h-[500px] flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-500 mb-4">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">Coming Soon</h3>
                <p className="text-gray-600 mb-6">This tool is currently in development and will be available soon.</p>
                <Button variant="outline">Join Waitlist</Button>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-medium mb-8">Related Tools</h2>
            <RelatedTools currentToolSlug={params.slug} category={tool.category} />
          </div>
        </div>
      </SectionWrapper>
    </main>
  )
}


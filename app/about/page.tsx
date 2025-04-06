import SectionWrapper from "@/components/section-wrapper"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - LoopedIn",
  description: "Learn about LoopedIn's mission, team, and purpose.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <SectionWrapper className="bg-white pt-24 md:pt-32">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-medium mb-6">About LoopedIn</h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-12">
            Our mission is to empower tech professionals with AI-powered tools and a supportive community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-medium mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                LoopedIn was founded in 2023 by a team of tech professionals who recognized the challenges of navigating
                the modern tech landscape. We saw firsthand how fragmented the tools and resources were for career
                development, learning, and community building.
              </p>
              <p className="text-gray-600 mb-4">
                Our platform brings together over 50 AI-powered tools designed specifically for tech professionals at
                every stage of their career journey. From resume building to code optimization, from career planning to
                community engagement, LoopedIn provides everything you need in one place.
              </p>
              <p className="text-gray-600">
                Today, we're proud to serve thousands of developers, designers, and tech professionals worldwide,
                helping them learn, build, grow, and land their dream jobs.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <h2 className="text-2xl font-medium mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                We believe that technology careers should be accessible to everyone with the passion and dedication to
                pursue them. Our mission is threefold:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">
                    <strong className="text-gray-900">Empower</strong> tech professionals with cutting-edge AI tools
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">
                    <strong className="text-gray-900">Connect</strong> like-minded individuals through our community
                    platforms
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">
                    <strong className="text-gray-900">Democratize</strong> access to career advancement resources
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-medium mb-8">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {[
              { name: "Alex Johnson", role: "Founder & CEO", image: "1" },
              { name: "Sarah Chen", role: "CTO", image: "2" },
              { name: "Michael Rodriguez", role: "Head of Product", image: "3" },
              { name: "Priya Patel", role: "Head of AI", image: "4" },
              { name: "David Kim", role: "Lead Developer", image: "5" },
              { name: "Emma Wilson", role: "Community Manager", image: "6" },
              { name: "James Thompson", role: "UX Designer", image: "7" },
              { name: "Olivia Martinez", role: "Content Strategist", image: "8" },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={`/placeholder.svg?height=96&width=96`} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 text-center mb-16">
            <h2 className="text-2xl font-medium mb-4">Join Our Team</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about technology and helping others
              succeed. Check out our open positions and join us in our mission.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
              View Open Positions
            </button>
          </div>
        </div>
      </SectionWrapper>
    </main>
  )
}


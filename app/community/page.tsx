import SectionWrapper from "@/components/section-wrapper"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MessageSquare, ThumbsUp, Award, Users, Video } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Community - LoopedIn",
  description: "Join the LoopedIn community to connect with other tech professionals, participate in forums, and more.",
}

export default function CommunityPage() {
  return (
    <main className="min-h-screen">
      <SectionWrapper className="bg-white pt-24 md:pt-32">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-medium mb-6">Community</h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-12">
            Connect with other tech professionals, share knowledge, and grow together.
          </p>

          <Tabs defaultValue="forums" className="w-full">
            <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-4 mb-8">
              <TabsTrigger value="forums" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span className="hidden md:inline">Forums</span>
              </TabsTrigger>
              <TabsTrigger value="devcast" className="flex items-center gap-2">
                <Video className="h-4 w-4" />
                <span className="hidden md:inline">DevCast</span>
              </TabsTrigger>
              <TabsTrigger value="devduel" className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span className="hidden md:inline">DevDuel</span>
              </TabsTrigger>
              <TabsTrigger value="chatspace" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="hidden md:inline">ChatSpace</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="forums">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle>How to optimize React performance?</CardTitle>
                      <CardDescription>Posted 2 days ago by Alex Johnson</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        I'm working on a large React application and noticing some performance issues. What are some
                        best practices for optimizing React components?
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <ThumbsUp className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-500">24</span>
                        <MessageSquare className="h-4 w-4 text-gray-500 ml-2" />
                        <span className="text-sm text-gray-500">12</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        View Thread
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline" size="lg">
                  Load More
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="devcast">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="hover:shadow-md transition-shadow">
                    <div className="relative h-48 bg-gray-200 rounded-t-lg">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Video className="h-12 w-12 text-gray-400" />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>Building a Career in AI Development</CardTitle>
                      <CardDescription>By Sarah Chen • 45 minutes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Learn how to transition into AI development and build a successful career path.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Watch Now</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="mt-12 p-8 bg-blue-50 rounded-2xl text-center">
                <h3 className="text-2xl font-medium mb-4">Coming Soon: DevCast Live</h3>
                <p className="text-gray-600 mb-6">
                  Join our weekly live sessions with industry experts and get your questions answered in real-time.
                </p>
                <Button>Get Notified</Button>
              </div>
            </TabsContent>

            <TabsContent value="devduel">
              <div className="bg-blue-50 rounded-2xl p-8 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-500 mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-medium mb-4">DevDuel: Code Battles</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Challenge other developers to coding duels, solve problems head-to-head, and climb the leaderboard.
                  DevDuel is launching next month!
                </p>
                <Button>Join the Waitlist</Button>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-medium mb-6">Leaderboard Preview</h3>
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <div className="grid grid-cols-12 bg-gray-100 p-4 font-medium">
                    <div className="col-span-1">Rank</div>
                    <div className="col-span-5">User</div>
                    <div className="col-span-2">Wins</div>
                    <div className="col-span-2">Points</div>
                    <div className="col-span-2">Level</div>
                  </div>

                  {[1, 2, 3, 4, 5].map((rank) => (
                    <div key={rank} className="grid grid-cols-12 p-4 border-b border-gray-100">
                      <div className="col-span-1 font-medium">{rank}</div>
                      <div className="col-span-5 flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                          <AvatarFallback>U{rank}</AvatarFallback>
                        </Avatar>
                        <span>User{rank}</span>
                      </div>
                      <div className="col-span-2">{30 - rank * 5}</div>
                      <div className="col-span-2">{1000 - rank * 150}</div>
                      <div className="col-span-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                          Level {6 - rank}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="chatspace">
              <div className="bg-blue-50 rounded-2xl p-8 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-500 mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-medium mb-4">Community ChatSpace</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Connect with other developers in real-time, join topic-based chat rooms, and build your network.
                  ChatSpace is coming soon!
                </p>
                <Button>Join the Beta</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </SectionWrapper>
    </main>
  )
}


import {
  Brain,
  FileText,
  Users,
  Code,
  Calendar,
  Mail,
  Focus,
  Music,
  Mic,
  Code2,
  GitBranch,
  Award,
  TestTube,
  Trophy,
  MessageSquare,
  Zap,
  BookOpen,
  Briefcase,
  LineChart,
  Database,
  Bot,
  Layers,
  PenTool,
  Cpu,
  Compass,
} from "lucide-react"
import type { ReactNode } from "react"

export interface Tool {
  name: string
  slug: string
  description: string
  category: string
  icon: ReactNode
  features?: string[]
}

const tools: Tool[] = [
  // AI Tools
  {
    name: "Resume Builder",
    slug: "resume-builder",
    description: "Create professional resumes with AI assistance",
    category: "AI Tools",
    icon: <FileText className="h-5 w-5" />,
    features: [
      "AI-powered content suggestions",
      "ATS-friendly templates",
      "Real-time feedback and improvements",
      "Export to multiple formats",
      "Integration with LinkedIn",
    ],
  },
  {
    name: "Cover Letter Generator",
    slug: "cover-letter-generator",
    description: "Generate tailored cover letters for job applications",
    category: "AI Tools",
    icon: <FileText className="h-5 w-5" />,
    features: [
      "Job description analysis",
      "Personalized content generation",
      "Multiple style options",
      "Grammar and tone checking",
      "One-click application integration",
    ],
  },
  {
    name: "Gemini Assistant",
    slug: "gemini-assistant",
    description: "AI assistant for career guidance and job search",
    category: "AI Tools",
    icon: <Brain className="h-5 w-5" />,
    features: [
      "Interview preparation",
      "Salary negotiation advice",
      "Career path planning",
      "Job market insights",
      "Personalized recommendations",
    ],
  },
  {
    name: "Career Cloner",
    slug: "career-cloner",
    description: "Model your career path after successful professionals",
    category: "AI Tools",
    icon: <Users className="h-5 w-5" />,
    features: [
      "Success pattern analysis",
      "Personalized roadmap creation",
      "Skill gap identification",
      "Learning resource recommendations",
      "Progress tracking",
    ],
  },
  {
    name: "Roadmap Builder",
    slug: "roadmap-builder",
    description: "Create custom learning and career roadmaps",
    category: "AI Tools",
    icon: <Code className="h-5 w-5" />,
    features: [
      "Customizable learning paths",
      "Timeline estimation",
      "Resource integration",
      "Progress tracking",
      "Community sharing",
    ],
  },
  {
    name: "Project Idea Generator",
    slug: "project-idea-generator",
    description: "Generate portfolio project ideas based on your skills",
    category: "AI Tools",
    icon: <Brain className="h-5 w-5" />,
    features: [
      "Skill-based recommendations",
      "Difficulty levels",
      "Resource requirements",
      "Implementation guides",
      "Similar project examples",
    ],
  },
  {
    name: "GitHub README Generator",
    slug: "github-readme-generator",
    description: "Create professional README files for your projects",
    category: "AI Tools",
    icon: <FileText className="h-5 w-5" />,
    features: [
      "Project analysis",
      "Structure templates",
      "Badge integration",
      "Screenshot placement",
      "SEO optimization",
    ],
  },
  {
    name: "Dev Journaling",
    slug: "dev-journaling",
    description: "AI-powered journaling tool for developers",
    category: "AI Tools",
    icon: <FileText className="h-5 w-5" />,
    features: ["Daily prompts", "Progress tracking", "Insight generation", "Mood analysis", "Goal setting assistance"],
  },

  // Productivity
  {
    name: "Smart Daily Planner",
    slug: "smart-daily-planner",
    description: "AI-optimized daily planning for developers",
    category: "Productivity",
    icon: <Calendar className="h-5 w-5" />,
    features: [
      "Flow state optimization",
      "Meeting scheduling",
      "Break reminders",
      "Priority management",
      "Calendar integration",
    ],
  },
  {
    name: "ColdMail AI",
    slug: "coldmail-ai",
    description: "Generate effective outreach emails for networking",
    category: "Productivity",
    icon: <Mail className="h-5 w-5" />,
    features: [
      "Personalized templates",
      "Response rate optimization",
      "Follow-up scheduling",
      "A/B testing",
      "Integration with email providers",
    ],
  },
  {
    name: "CodeScheduler",
    slug: "code-scheduler",
    description: "Schedule and optimize your coding sessions",
    category: "Productivity",
    icon: <Calendar className="h-5 w-5" />,
    features: [
      "Productivity pattern analysis",
      "Focus time blocking",
      "Project deadline management",
      "Break optimization",
      "Progress tracking",
    ],
  },
  {
    name: "Daily Dev Mode",
    slug: "daily-dev-mode",
    description: "Distraction-free coding environment",
    category: "Productivity",
    icon: <Focus className="h-5 w-5" />,
    features: ["Website blocking", "Focus metrics", "Ambient sound integration", "Session statistics", "Goal setting"],
  },
  {
    name: "Spotify + Pomodoro",
    slug: "spotify-pomodoro",
    description: "Combine music and timed work sessions",
    category: "Productivity",
    icon: <Music className="h-5 w-5" />,
    features: [
      "Spotify integration",
      "Customizable work intervals",
      "Productivity playlists",
      "Session statistics",
      "BPM-based focus music",
    ],
  },
  {
    name: "Voice Assistant",
    slug: "voice-assistant",
    description: "Voice-controlled coding assistant",
    category: "Productivity",
    icon: <Mic className="h-5 w-5" />,
    features: [
      "Code dictation",
      "Documentation search",
      "Command execution",
      "Meeting notes",
      "Voice-to-code conversion",
    ],
  },

  // Dev Growth
  {
    name: "Snippify",
    slug: "snippify",
    description: "Organize and share your code snippets",
    category: "Dev Growth",
    icon: <Code2 className="h-5 w-5" />,
    features: [
      "Syntax highlighting",
      "Tagging system",
      "Search functionality",
      "Version history",
      "Public/private sharing",
    ],
  },
  {
    name: "GitSync Pro",
    slug: "gitsync-pro",
    description: "Track and manage multiple repositories",
    category: "Dev Growth",
    icon: <GitBranch className="h-5 w-5" />,
    features: [
      "Multi-repo dashboard",
      "Commit analytics",
      "PR tracking",
      "Issue management",
      "Team collaboration tools",
    ],
  },
  {
    name: "Open Source Explorer",
    slug: "open-source-explorer",
    description: "Find open source projects to contribute to",
    category: "Dev Growth",
    icon: <Code className="h-5 w-5" />,
    features: [
      "Skill-based matching",
      "Beginner-friendly filters",
      "Contribution guides",
      "Mentor connections",
      "Impact tracking",
    ],
  },
  {
    name: "TestZone",
    slug: "test-zone",
    description: "API testing and documentation platform",
    category: "Dev Growth",
    icon: <TestTube className="h-5 w-5" />,
    features: [
      "Request builder",
      "Response validation",
      "Environment variables",
      "Test automation",
      "Documentation generation",
    ],
  },
  {
    name: "Auto-certifications",
    slug: "auto-certifications",
    description: "Track and prepare for tech certifications",
    category: "Dev Growth",
    icon: <Award className="h-5 w-5" />,
    features: [
      "Study plans",
      "Practice exams",
      "Progress tracking",
      "Resource recommendations",
      "Certification reminders",
    ],
  },
  {
    name: "LeetCode Integration",
    slug: "leetcode-integration",
    description: "Practice coding challenges with analytics",
    category: "Dev Growth",
    icon: <Code className="h-5 w-5" />,
    features: [
      "Problem recommendations",
      "Solution analysis",
      "Progress tracking",
      "Interview preparation",
      "Skill gap identification",
    ],
  },

  // Community & Fun
  {
    name: "Coding Forums",
    slug: "coding-forums",
    description: "Community discussions on tech topics",
    category: "Community & Fun",
    icon: <MessageSquare className="h-5 w-5" />,
    features: [
      "Topic categorization",
      "Code sharing",
      "Expert verification",
      "Reputation system",
      "Search functionality",
    ],
  },
  {
    name: "Leaderboards",
    slug: "leaderboards",
    description: "Compete and track progress with other developers",
    category: "Community & Fun",
    icon: <Trophy className="h-5 w-5" />,
    features: [
      "Skill-based rankings",
      "Challenge completion tracking",
      "Achievement badges",
      "Weekly competitions",
      "Team leaderboards",
    ],
  },
  {
    name: "DevCast",
    slug: "devcast",
    description: "Tech talks and tutorials from the community",
    category: "Community & Fun",
    icon: <Users className="h-5 w-5" />,
    features: ["Live streaming", "Video library", "Topic filtering", "Q&A sessions", "Speaker profiles"],
  },
  {
    name: "DevDuel",
    slug: "devduel",
    description: "Compete in real-time coding battles",
    category: "Community & Fun",
    icon: <Trophy className="h-5 w-5" />,
    features: [
      "1v1 challenges",
      "Team competitions",
      "Multiple difficulty levels",
      "Language selection",
      "Spectator mode",
    ],
  },
  {
    name: "Community ChatSpace",
    slug: "community-chatspace",
    description: "Real-time chat with other developers",
    category: "Community & Fun",
    icon: <MessageSquare className="h-5 w-5" />,
    features: [
      "Topic channels",
      "Direct messaging",
      "Code sharing",
      "Event notifications",
      "Integration with other tools",
    ],
  },

  // Additional tools to reach 50+
  {
    name: "AI Code Reviewer",
    slug: "ai-code-reviewer",
    description: "Get automated code reviews and suggestions",
    category: "AI Tools",
    icon: <Zap className="h-5 w-5" />,
    features: [
      "Code quality analysis",
      "Security vulnerability detection",
      "Performance optimization",
      "Style guide enforcement",
      "Integration with GitHub",
    ],
  },
  {
    name: "Tech Interview Simulator",
    slug: "tech-interview-simulator",
    description: "Practice technical interviews with AI",
    category: "AI Tools",
    icon: <Users className="h-5 w-5" />,
    features: [
      "Company-specific questions",
      "Real-time feedback",
      "Video recording",
      "Performance analytics",
      "Custom interview scenarios",
    ],
  },
  {
    name: "Learning Path Tracker",
    slug: "learning-path-tracker",
    description: "Track your progress through learning resources",
    category: "Dev Growth",
    icon: <BookOpen className="h-5 w-5" />,
    features: [
      "Course integration",
      "Progress visualization",
      "Skill mapping",
      "Resource recommendations",
      "Learning streak tracking",
    ],
  },
  {
    name: "Job Application Tracker",
    slug: "job-application-tracker",
    description: "Manage and track your job applications",
    category: "Productivity",
    icon: <Briefcase className="h-5 w-5" />,
    features: [
      "Application status tracking",
      "Interview scheduling",
      "Document management",
      "Follow-up reminders",
      "Salary negotiation tools",
    ],
  },
  {
    name: "Skill Analytics",
    slug: "skill-analytics",
    description: "Analyze and visualize your tech skill growth",
    category: "Dev Growth",
    icon: <LineChart className="h-5 w-5" />,
    features: [
      "Skill assessment",
      "Growth visualization",
      "Industry benchmarking",
      "Recommendation engine",
      "Portfolio integration",
    ],
  },
  {
    name: "Database Designer",
    slug: "database-designer",
    description: "Design and visualize database schemas",
    category: "Dev Growth",
    icon: <Database className="h-5 w-5" />,
    features: [
      "Visual schema builder",
      "SQL generation",
      "Relationship mapping",
      "Performance optimization",
      "Export to multiple formats",
    ],
  },
  {
    name: "AI Debugging Assistant",
    slug: "ai-debugging-assistant",
    description: "Get help debugging your code with AI",
    category: "AI Tools",
    icon: <Bot className="h-5 w-5" />,
    features: [
      "Error analysis",
      "Solution suggestions",
      "Code explanation",
      "Similar issue lookup",
      "Integration with IDEs",
    ],
  },
  {
    name: "Architecture Visualizer",
    slug: "architecture-visualizer",
    description: "Create visual diagrams of your application architecture",
    category: "Dev Growth",
    icon: <Layers className="h-5 w-5" />,
    features: [
      "Component mapping",
      "Data flow visualization",
      "Dependency tracking",
      "Scalability analysis",
      "Export to multiple formats",
    ],
  },
  {
    name: "UI/UX Wireframer",
    slug: "uiux-wireframer",
    description: "Create wireframes and mockups for your applications",
    category: "Dev Growth",
    icon: <PenTool className="h-5 w-5" />,
    features: [
      "Component library",
      "Responsive design tools",
      "User flow mapping",
      "Collaboration features",
      "Export to design tools",
    ],
  },
  {
    name: "Algorithm Visualizer",
    slug: "algorithm-visualizer",
    description: "Visualize and understand complex algorithms",
    category: "Dev Growth",
    icon: <Cpu className="h-5 w-5" />,
    features: [
      "Step-by-step visualization",
      "Performance analysis",
      "Code generation",
      "Custom input testing",
      "Algorithm comparison",
    ],
  },
  {
    name: "Tech Radar",
    slug: "tech-radar",
    description: "Stay updated with the latest tech trends",
    category: "Dev Growth",
    icon: <Compass className="h-5 w-5" />,
    features: [
      "Personalized recommendations",
      "Industry trend analysis",
      "Learning resources",
      "Technology comparisons",
      "Adoption timelines",
    ],
  },
]

// Add the missing export functions
export function getAllTools(): Tool[] {
  return tools
}

export function getToolsByCategory(category: string): Tool[] {
  return tools.filter((tool) => tool.category.toLowerCase() === category.replace("-", " ").toLowerCase())
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug)
}

export function getRelatedTools(currentSlug: string, category: string, limit = 4): Tool[] {
  return tools.filter((tool) => tool.slug !== currentSlug && tool.category === category).slice(0, limit)
}


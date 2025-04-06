import Link from "next/link"
import Image from "next/image"
import { Twitter, Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* ✅ Logo & Title */}
          <div className="flex items-center mb-6 md:mb-0">
            <Image
              src="/logo.svg" // ✅ fixed path
              alt="LoopedIn Logo"
              width={32}
              height={32}
              className="rounded-full mr-2"
            />
            <span className="font-medium text-lg">LoopedIn</span>
          </div>

          {/* ✅ Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm">
              Contact
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Privacy
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Terms
            </Link>
          </div>

          {/* ✅ Social Icons */}
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>

        {/* ✅ Copyright */}
        <div className="text-center mt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} LoopedIn. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

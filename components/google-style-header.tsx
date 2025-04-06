"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function GoogleStyleHeader() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const getPageTitle = () => {
    switch (pathname) {
      case "/":
        return "Home"
      case "/features":
        return "Features"
      case "/community":
        return "Community"
      case "/about":
        return "About"
      case "/contact":
        return "Contact"
      case "/login":
        return "Login"
      case "/signup":
        return "Sign Up"
      default:
        if (pathname.startsWith("/tools/")) {
          return "Tool Details"
        }
        return "LoopedIn"
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-2"
        >
          <div className="container mx-auto px-4 flex items-center justify-between">
            {/* ✅ Logo + Title */}
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo.svg" // ✅ Fixed path
                  alt="LoopedIn Logo"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="font-medium text-gray-800">{getPageTitle()}</span>
              </Link>
            </div>

            {/* ✅ Search Bar */}
            <div className="hidden md:flex items-center max-w-md w-full mx-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search LoopedIn..."
                  className="pl-10 py-2 text-sm rounded-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* ✅ Sign In */}
            <div className="flex items-center gap-2">
              <Link href="/login" className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                Sign In
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

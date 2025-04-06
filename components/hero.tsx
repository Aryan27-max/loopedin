"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-medium tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          LoopedIn – Your All-in-One Tech Career Platform
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          50+ AI-powered tools to help you learn, build, grow, and land your dream job.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-lg py-6 px-8 rounded-2xl" asChild>
            <Link href="/features">Explore Tools</Link>
          </Button>
          <Button variant="outline" size="lg" className="text-lg py-6 px-8 rounded-2xl" asChild>
            <Link href="/about">Learn More</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}


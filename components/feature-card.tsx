"use client"

import { Card } from "@/components/ui/card"
import type { Tool } from "@/lib/tools"
import Link from "next/link"
import { motion } from "framer-motion"

interface FeatureCardProps {
  tool: Tool
}

export default function FeatureCard({ tool }: FeatureCardProps) {
  return (
    <Link href={`/tools/${tool.slug}`}>
      <motion.div whileHover={{ y: -8, transition: { duration: 0.2 } }} whileTap={{ scale: 0.98 }}>
        <Card className="p-6 h-full rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer">
          <div className="flex flex-col h-full">
            <div className="mb-4 p-2 rounded-full bg-blue-100 w-fit">{tool.icon}</div>
            <h3 className="text-lg font-medium mb-2">{tool.name}</h3>
            <p className="text-gray-600 text-sm flex-grow">{tool.description}</p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                {tool.category}
              </span>
            </div>
          </div>
        </Card>
      </motion.div>
    </Link>
  )
}


"use client"

import { getRelatedTools } from "@/lib/tools"
import FeatureCard from "@/components/feature-card"
import { motion } from "framer-motion"

interface RelatedToolsProps {
  currentToolSlug: string
  category: string
}

export default function RelatedTools({ currentToolSlug, category }: RelatedToolsProps) {
  const relatedTools = getRelatedTools(currentToolSlug, category)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {relatedTools.map((tool, index) => (
        <motion.div
          key={tool.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <FeatureCard tool={tool} />
        </motion.div>
      ))}
    </div>
  )
}


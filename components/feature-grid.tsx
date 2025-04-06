"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { getAllTools, getToolsByCategory } from "@/lib/tools"
import FeatureCard from "@/components/feature-card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface FeatureGridProps {
  title?: string
  showViewAllLink?: boolean
  showAllFeatures?: boolean
  showCategories?: boolean
}

export default function FeatureGrid({
  title = "Powerful Tools for Every Stage of Your Tech Career",
  showViewAllLink = false,
  showAllFeatures = false,
  showCategories = true,
}: FeatureGridProps) {
  const [activeCategory, setActiveCategory] = useState("ai-tools")
  const categories = [
    { id: "ai-tools", name: "AI Tools" },
    { id: "productivity", name: "Productivity" },
    { id: "dev-growth", name: "Dev Growth" },
    { id: "community", name: "Community & Fun" },
  ]

  const tools = showAllFeatures ? getAllTools() : getToolsByCategory(activeCategory)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {title && <h2 className="text-3xl md:text-4xl font-medium text-center mb-16">{title}</h2>}

        {showCategories && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                  activeCategory === category.id
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <FeatureCard tool={tool} />
            </motion.div>
          ))}
        </div>

        {showViewAllLink && (
          <div className="text-center mt-12">
            <Link href="/features" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              View all 50+ tools
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}


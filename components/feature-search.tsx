"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { getAllTools } from "@/lib/tools"
import Link from "next/link"

export default function FeatureSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const allTools = getAllTools()

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      setIsSearching(true)
      const filteredTools = allTools.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setSearchResults(filteredTools)
    } else {
      setIsSearching(false)
      setSearchResults([])
    }
  }, [searchQuery])

  return (
    <div className="relative mb-12">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="search"
          placeholder="Search for tools, features, or categories..."
          className="pl-10 py-6 text-lg rounded-xl"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <AnimatePresence>
        {isSearching && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-200 max-h-80 overflow-y-auto"
          >
            {searchResults.length > 0 ? (
              <ul className="py-2">
                {searchResults.map((tool) => (
                  <li key={tool.slug}>
                    <Link href={`/tools/${tool.slug}`} className="flex items-center px-4 py-3 hover:bg-gray-50">
                      <div className="p-2 rounded-full bg-blue-100 mr-3">{tool.icon}</div>
                      <div>
                        <h4 className="font-medium">{tool.name}</h4>
                        <p className="text-sm text-gray-600">{tool.description}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-4 text-center text-gray-500">No results found for "{searchQuery}"</div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


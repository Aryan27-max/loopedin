"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

export default function ComparisonTable() {
  const features = [
    { name: "AI Career Planning", loopedin: true, linkedin: false, github: false, leetcode: false, notion: false },
    { name: "Project Portfolio", loopedin: true, linkedin: false, github: true, leetcode: false, notion: false },
    { name: "Coding Challenges", loopedin: true, linkedin: false, github: false, leetcode: true, notion: false },
    { name: "Resume Builder", loopedin: true, linkedin: true, github: false, leetcode: false, notion: false },
    { name: "Community Support", loopedin: true, linkedin: true, github: true, leetcode: false, notion: false },
    { name: "Knowledge Management", loopedin: true, linkedin: false, github: false, leetcode: false, notion: true },
    { name: "Job Recommendations", loopedin: true, linkedin: true, github: false, leetcode: false, notion: false },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Why Choose LoopedIn?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">One platform for all your tech career needs</p>
        </motion.div>

        <div className="overflow-x-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="min-w-max"
          >
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-blue-50">
                  <th className="py-4 px-6 text-left font-medium text-gray-700">Features</th>
                  <th className="py-4 px-6 text-center font-medium text-blue-700">LoopedIn</th>
                  <th className="py-4 px-6 text-center font-medium text-blue-900">LinkedIn</th>
                  <th className="py-4 px-6 text-center font-medium text-gray-900">GitHub</th>
                  <th className="py-4 px-6 text-center font-medium text-yellow-700">LeetCode</th>
                  <th className="py-4 px-6 text-center font-medium text-gray-700">Notion</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-6 text-left font-medium">{feature.name}</td>
                    <td className="py-3 px-6 text-center">
                      {feature.loopedin ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 px-6 text-center">
                      {feature.linkedin ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 px-6 text-center">
                      {feature.github ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 px-6 text-center">
                      {feature.leetcode ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 px-6 text-center">
                      {feature.notion ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


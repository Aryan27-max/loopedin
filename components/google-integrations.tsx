"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function GoogleIntegrations() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-medium mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Seamless Google Integrations
        </motion.h2>

        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Connect with your favorite Google tools for a streamlined workflow
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-2xl px-8 py-6">
              Launch Gemini Assistant
            </Button>
          </motion.div>

          <motion.div variants={item}>
            <Button className="bg-green-500 hover:bg-green-600 text-white rounded-2xl px-8 py-6">
              Open Colab Project
            </Button>
          </motion.div>

          <motion.div variants={item}>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-2xl px-8 py-6">
              Export Resume to Google Docs
            </Button>
          </motion.div>

          <motion.div variants={item}>
            <Button className="bg-red-500 hover:bg-red-600 text-white rounded-2xl px-8 py-6">
              Sync with Google Calendar
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-6 w-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Global Access</h3>
            <p className="text-gray-600">
              Access your tools and resources from anywhere with Google account integration
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Smart Sync</h3>
            <p className="text-gray-600">Automatically sync your progress and data across all Google services</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-6 w-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Secure Storage</h3>
            <p className="text-gray-600">
              Keep all your career documents and code securely stored with Google's infrastructure
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


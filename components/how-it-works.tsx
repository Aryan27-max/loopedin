"use client"

import { motion } from "framer-motion"
import { LogIn, Brain, Rocket } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <LogIn className="h-8 w-8 text-blue-500" />,
      title: "Sign in with Google",
      description: "Connect your Google account for seamless integration with all your tools and documents.",
    },
    {
      icon: <Brain className="h-8 w-8 text-green-500" />,
      title: "Get AI Career Plan",
      description: "Our AI analyzes your skills and goals to create a personalized career development roadmap.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-purple-500" />,
      title: "Land Jobs & Build Projects",
      description:
        "Follow your plan, build impressive projects, and connect with opportunities that match your profile.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">How LoopedIn Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to transform your tech career journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-8">
                <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2">
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-500"></div>
                  </div>
                )}
                <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


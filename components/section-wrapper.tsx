"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface SectionWrapperProps {
  children: ReactNode
  className?: string
}

export default function SectionWrapper({ children, className = "" }: SectionWrapperProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.section>
  )
}


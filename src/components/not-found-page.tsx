"use client"

import { motion } from "framer-motion"
import { Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <h1 className="text-[200px] font-bold text-gradient leading-none mb-4">
            404
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-foreground/60 mb-12 max-w-md mx-auto"
        >
          Oops! The page you&apos;re looking for seems to have wandered off into the digital void.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Button size="lg" asChild>
            <Link href="/">
              <Home size={20} />
              Back to Home
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

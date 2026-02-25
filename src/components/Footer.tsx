"use client"

import { motion } from "framer-motion"
import { MessageCircle, Mail, Linkedin, Github } from "lucide-react"
import { portfolioData } from "@/data/portfolio"

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        {/* Upper Layer */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8 pb-8 border-b border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md"
          >
            <h3 className="text-2xl font-bold mb-2 text-gradient">Hashir</h3>
            <p className="text-foreground/60 text-sm">
              Passionate Software Developer crafting exceptional digital experiences with modern technologies and clean code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-4"
          >
            <a
              href={`https://wa.me/${portfolioData.email.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 glass rounded-xl px-4 py-3 hover:bg-white/10 transition-all group"
            >
              <MessageCircle className="text-amber-400 group-hover:text-amber-300 transition-colors" size={20} />
              <span className="text-sm font-medium hover:text-amber-400">WhatsApp</span>
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              className="flex items-center gap-2 glass rounded-xl px-4 py-3 hover:bg-white/10 transition-all group"
            >
              <Mail className="text-amber-400 group-hover:text-amber-400 transition-colors" size={20} />
              <span className="text-sm font-medium hover:text-amber-400">{portfolioData.email}</span>
            </a>
          </motion.div>
        </div>

        {/* Bottom Layer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground/60 text-sm"
          >
            © {new Date().getFullYear()} <span className="text-yellow-400">Muhammed Hashir Musthafa.</span> All rights reserved.
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-6 text-sm"
          >
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/60 hover:text-amber-400 transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/60 hover:text-amber-400 transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

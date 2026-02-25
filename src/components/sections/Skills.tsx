"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { portfolioData } from "@/data/portfolio"

const categories = ["All", "Frontend", "Backend", "Database", "DevOps & Tools"]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const filteredSkills = activeCategory === "All"
    ? portfolioData.skills
    : portfolioData.skills.filter(skill => skill.category === activeCategory)

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute top-1/4 -left-32 w-150 h-150 bg-amber-400/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-125 h-125 bg-yellow-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.03),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-semibold tracking-[0.3em] uppercase text-amber-400/80 mb-4 block">Expertise</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Technical <span className="text-gradient bg-clip-text text-transparent bg-linear-to-r from-primary via-secondary to-accent">Mastery</span>
          </h2>
          <p className="text-foreground/50 text-lg max-w-2xl mx-auto font-light">Crafting exceptional digital experiences with cutting-edge technologies</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-16 relative px-4"
        >
          <div className="inline-flex flex-wrap justify-center p-1.5 rounded-full glass backdrop-blur-xl border border-white/10 shadow-2xl gap-1">
            {categories.map((category, idx) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="relative px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors z-10 whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-primary/90 to-secondary/90 rounded-full" />
                    <div className="absolute inset-0 backdrop-blur-xl bg-white/10 rounded-full" />
                    <div className="absolute inset-0 shadow-lg shadow-primary/50 rounded-full" />
                    <div className="absolute inset-px rounded-full border border-white/20" />
                  </motion.div>
                )}
                <span className={`relative z-10 transition-colors ${
                  activeCategory === category ? "text-amber-400" : "text-foreground/60 hover:text-foreground"
                }`}>
                  {category}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-8 max-w-7xl mx-auto pt-6"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.03,
                  ease: [0.22, 1, 0.36, 1]
                }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="group relative mt-3"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="relative glass backdrop-blur-xl rounded-xl p-5 border border-white/10 overflow-visible h-full"
                >
                  {/* Realistic Push Pin Effect */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                    {/* Pin Head */}
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-linear-to-br from-amber-300 via-amber-400 to-amber-600 shadow-lg" />
                      <div className="absolute inset-0 w-4 h-4 rounded-full bg-linear-to-tl from-white/40 to-transparent" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-600/50" />
                    </div>
                    {/* Pin Needle */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-linear-to-b from-gray-400 via-gray-500 to-transparent shadow-sm" />
                  </div>
                  
                  {/* Subtle Glow on Hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-amber-400/0 to-yellow-500/0 group-hover:from-amber-400/10 group-hover:to-yellow-500/10 transition-all duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-22.5 pt-4">
                    {/* Category Badge */}
                    <span className="text-[10px] uppercase tracking-wider text-foreground/40 mb-2 font-light">
                      {skill.category}
                    </span>
                    
                    {/* Skill Name */}
                    <motion.h3
                      className="text-base md:text-xl font-semibold tracking-tight mb-3"
                      animate={{
                        color: hoveredSkill === skill.name ? '#fbbf24' : 'currentColor'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {skill.name}
                    </motion.h3>
                    
                    {/* Simple Progress Bar */}
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-linear-to-r from-amber-400 to-yellow-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1.2,
                          delay: index * 0.03 + 0.2,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

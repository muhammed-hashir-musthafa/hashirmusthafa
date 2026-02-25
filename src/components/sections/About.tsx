"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-foreground/60 text-lg">Get to know me better</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-linear-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
              <div className="absolute -inset-2 bg-linear-to-br from-accent via-primary to-secondary rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

              <div className="glass rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="relative w-full aspect-square mb-6">
                    <div className="absolute inset-0 bg-linear-to-br from-primary to-secondary rounded-xl blur-md opacity-50" />
                    <div className="absolute inset-0 bg-linear-to-tr from-accent to-primary rounded-xl blur-lg opacity-30 animate-pulse" />
                    <Image
                      src="/photo.png"
                      width={400}
                      height={400}
                      alt={portfolioData.name}
                      className="relative w-full h-full object-cover object-top scale-100 rounded-xl border-2 border-white/10 shadow-2xl group-hover:scale-[1.15] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 rounded-xl bg-linear-to-t from-black/20 to-transparent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {portfolioData.name}
                  </h3>
                  <p className="text-yellow-400 font-medium">
                    {portfolioData.title}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              {portfolioData.bio}
            </p>

            <div className="flex gap-4 glass rounded-2xl p-8 justify-center">
              <motion.a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <Github className="w-8 h-8 text-amber-400 group-hover:text-amber-300 transition-colors" />
                <span className="text-sm text-foreground/60">GitHub</span>
              </motion.a>

              <motion.a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <Linkedin className="w-8 h-8 text-amber-400 group-hover:text-amber-300 transition-colors" />
                <span className="text-sm text-foreground/60">LinkedIn</span>
              </motion.a>

              <motion.a
                href={`mailto:${portfolioData.email}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <Mail className="w-8 h-8 text-amber-400 group-hover:text-amber-300 transition-colors" />
                <span className="text-sm text-foreground/60">Email</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

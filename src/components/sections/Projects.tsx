"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, X, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = portfolioData.projects;

  return (
    <section id="projects" className="relative overflow-hidden bg-black">
      {/* Ambient lighting */}
      <div className="absolute top-0 left-1/4 w-150 h-150 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-125 h-125 bg-secondary/10 rounded-full blur-[150px]" />

      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-32 md:py-40">
        {/* Title */}
        {/* <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 md:mb-32"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Selected
            <br />
            <span className="text-gradient bg-clip-text text-transparent bg-linear-to-r from-primary via-secondary to-accent">
              Work
            </span>
          </h2>
        </motion.div> */}

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Selected <span className="text-gradient">Works</span>
          </h2>
          <p className="text-foreground/60 text-lg">Explore it!</p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-32 md:space-y-40">
          {projects.map((project, index) => (
            <ProjectShowcase
              key={index}
              project={project}
              index={index}
              inView={inView}
              onClick={() => setSelectedProject(index)}
            />
          ))}
        </div>
      </div>

      {/* Immersive Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <ProjectModal
            project={projects[selectedProject]}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

interface ProjectShowcaseProps {
  project: (typeof portfolioData.projects)[0];
  index: number;
  inView: boolean;
  onClick: () => void;
}

function ProjectShowcase({ project, index, onClick }: ProjectShowcaseProps) {
  const isEven = index % 2 === 0;
  const { ref: itemRef, inView: itemInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 100 }}
      animate={itemInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1.2,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}
    >
      {/* Image */}
      <motion.div
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`lg:col-span-7 relative group cursor-pointer ${isEven ? "" : "lg:col-start-6"}`}
      >
        <div className="relative aspect-16/10 rounded-3xl overflow-hidden bg-linear-to-br from-primary/20 via-secondary/20 to-accent/20">
          {/* Placeholder gradient */}
          <div className="absolute inset-0 bg-linear-to-br from-primary/30 via-secondary/30 to-accent/30" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700" />

          {/* Glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 bg-linear-to-t from-primary/20 via-transparent to-transparent" />
          </div>

          {/* Preview Image */}
            <Image
              width={800}
              height={500}
              src={project.image}
              alt={project.title + " preview"}
              className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl group-hover:opacity-100 transition-opacity duration-700 bg-black"
              loading="lazy"
            />

          {/* Hover indicator */}
          <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <ArrowUpRight className="w-8 h-8" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div
        className={`lg:col-span-5 space-y-6 ${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}
      >
        <motion.div
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          animate={itemInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-sm font-mono text-amber-400 mb-4">
            {String(index + 1).padStart(2, "0")}
          </div>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {project?.title}
          </h3>

          <p className="text-lg md:text-xl text-foreground/60 leading-relaxed mb-8">
            {project?.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-3 mb-8">
            {project?.tech.map((tech: string, i: number) => (
              <span
                key={i}
                className="text-sm font-mono px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          {(project?.demo || project?.github) && (
            <div className="flex gap-4">
              {project?.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-amber-400 transition-colors duration-300"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                </Link>
              )}
              {project?.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-amber-400 transition-colors duration-300"
                >
                  <span>Source</span>
                  <Github className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

interface ProjectModalProps {
  project: (typeof portfolioData.projects)[0];
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 md:p-8"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-linear-to-br from-white/5 to-white/2y backdrop-blur-2xl rounded-3xl border border-white/10 p-8 md:p-12"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300 hover:rotate-90"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="space-y-8">
          <div>
            <h3 className="text-5xl md:text-6xl font-bold mb-4">
              {project?.title}
            </h3>
            <p className="text-xl text-foreground/60">{project?.description}</p>
          </div>

          {/* Large preview */}
          <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-primary/20 via-secondary/20 to-accent/20">
            <Image
              width={1200}
              height={800}
              src={project.image}
              alt={project.title + " preview"}
              className="relative rounded-2xl bg-black w-full h-auto object-contain"
              loading="lazy"
            />
          </div>

          {/* Tech stack */}
          <div>
            <h4 className="text-sm font-mono text-foreground/40 mb-4">
              TECH STACK
            </h4>
            <div className="flex flex-wrap gap-3">
              {project?.tech.map((tech: string, i: number) => (
                <span
                  key={i}
                  className="text-sm font-mono px-5 py-2.5 bg-white/5 rounded-full border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          {(project?.demo || project?.github) && (
            <div className="flex flex-wrap gap-4 pt-4">
              {project?.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-amber-400 hover:text-white transition-all duration-300"
                >
                  <span>View Live Project</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Link>
              )}
              {project?.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-amber-400 rounded-full font-medium border border-white/10 hover:border-amber-400 transition-all duration-300"
                >
                  <span>View Source</span>
                  <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </Link>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

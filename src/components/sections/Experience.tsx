"use client";

import { motion, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useRef } from "react";

// ─── Colours (matching globals.css HSL values) ────────────────────────────────
const PRIMARY = "hsl(38 92% 50%)"; // amber
const SECONDARY = "hsl(45 93% 47%)"; // gold

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const timelineRef = useRef<HTMLDivElement>(null);
  const mobileTimelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const { scrollYProgress: mobileScrollProgress } = useScroll({
    target: mobileTimelineRef,
    offset: ["start center", "end center"],
  });

  if (!portfolioData?.experience?.length) {
    return null;
  }

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background glow blob */}
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-foreground/60 text-lg">My professional journey</p>
        </motion.div>

        {/* ── Desktop Layout ── */}
        <div
          className="hidden md:block max-w-6xl mx-auto relative"
          ref={timelineRef}
        >
          {/* Single continuous center line — replaces the old per-segment approach */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 pointer-events-none overflow-hidden">
            {/* Faint background track so the line is visible even before scroll */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: `linear-gradient(to bottom, ${PRIMARY}, ${SECONDARY})`,
              }}
            />
            {/* Scroll-driven fill */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-full"
              style={{
                scaleY: scrollYProgress,
                transformOrigin: "top",
                background: `linear-gradient(to bottom, ${PRIMARY}, ${SECONDARY})`,
                boxShadow: `0 0 10px ${PRIMARY}`,
              }}
            />
          </div>

          {portfolioData.experience.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const isLast = index === portfolioData.experience.length - 1;

            return (
              <div key={index} className={`relative ${isLast ? "" : "mb-24"}`}>
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.25 }}
                  className={`relative w-[48%] ${isLeft ? "ml-0" : "ml-auto"}`}
                >
                  <div className="glass rounded-xl p-6 group hover:bg-white/10 transition-all glow-hover relative">
                    <motion.div
                      className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full z-10 ${
                        isLeft ? "-right-2" : "-left-2"
                      }`}
                      style={{
                        background: PRIMARY,
                        boxShadow: `0 0 16px 4px ${PRIMARY}`,
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full animate-ping opacity-60"
                        style={{
                          background: PRIMARY,
                        }}
                      />
                    </motion.div>

                    {/* Animated connector line */}
                    <motion.div
                      className={`absolute top-1/2 -translate-y-1/2 h-0.5 ${isLeft ? "left-full" : "right-full"}`}
                      style={{
                        width: "calc(4% + 2px)",
                        background: `linear-gradient(to ${isLeft ? "right" : "left"}, ${PRIMARY}, ${SECONDARY})`,
                        boxShadow: `0 0 8px ${PRIMARY}`,
                        transformOrigin: isLeft ? "left" : "right",
                      }}
                    />

                    <div className="flex items-center gap-3 mb-3">
                      <Briefcase className="text-primary" size={24} />
                      <span className="text-primary font-semibold">
                        {exp.duration}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                    <h4 className="text-xl text-foreground/80 mb-3">
                      {exp.company}
                    </h4>
                    <p className="text-foreground/60 mb-4">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-foreground/70"
                        >
                          <span className="text-primary mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* ── Mobile Vertical Layout ── */}
        <div className="md:hidden max-w-2xl mx-auto relative" ref={mobileTimelineRef}>
          {/* Vertical track with scroll fill */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 pointer-events-none overflow-hidden">
            {/* Background track */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: `linear-gradient(to bottom, ${PRIMARY}, ${SECONDARY})`,
              }}
            />
            {/* Scroll-driven fill */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-full"
              style={{
                scaleY: mobileScrollProgress,
                transformOrigin: "top",
                background: `linear-gradient(to bottom, ${PRIMARY}, ${SECONDARY})`,
                boxShadow: `0 0 10px ${PRIMARY}`,
              }}
            />
          </div>

          {portfolioData.experience.map((exp, index) => {

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative mb-12 ml-12"
              >
                {/* Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="absolute -left-10 top-6 w-4 h-4 rounded-full z-10"
                  style={{
                    background: PRIMARY,
                    boxShadow: `0 0 12px 3px ${PRIMARY}`,
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full animate-ping opacity-60"
                    style={{
                      background: PRIMARY,
                    }}
                  />
                </motion.div>

                <div className="glass rounded-xl p-6 group hover:bg-white/10 transition-all glow-hover">
                  <div className="flex items-center gap-3 mb-3">
                    <Briefcase className="text-primary" size={24} />
                    <span className="text-primary font-semibold">
                      {exp.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                  <h4 className="text-xl text-foreground/80 mb-3">
                    {exp.company}
                  </h4>
                  <p className="text-foreground/60 mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-foreground/70"
                      >
                        <span className="text-primary mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
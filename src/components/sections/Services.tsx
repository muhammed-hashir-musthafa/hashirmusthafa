"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as Icons from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { portfolioData } from "@/data/portfolio";
import { useState, useRef } from "react";

// Premium SaaS-inspired Services Section
export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const secondary = portfolioData.services;

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="services"
      className="relative py-32 bg-primary/20 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-secondary/5 to-accent/10 opacity-80" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10" />
        <motion.div
          className="absolute left-1/2 top-1/3 w-175 h-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-tr from-primary/30 via-secondary/20 to-accent/30 blur-[120px] opacity-60"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-24 text-center"
        >
          <span className="inline-block mb-4 px-7 py-2 rounded-full bg-linear-to-r from-primary/20 via-secondary/10 to-accent/20 border border-primary/30 text-primary font-semibold text-sm tracking-widest uppercase shadow-sm">
            What I Offer
          </span>
          <h2 className="text-6xl md:text-8xl font-extrabold tracking-tight bg-linear-to-r from-white via-primary to-accent bg-clip-text text-transparent mb-8">
            Premium Services
          </h2>
          <p className="text-foreground/80 text-xl md:text-2xl max-w-2xl mx-auto font-medium">
            High-end digital solutions crafted for ambitious brands and
            businesses.
          </p>
        </motion.div>

        <div className="relative mt-20">
          <motion.div
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar"
            ref={scrollRef}
            onScroll={checkScroll}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {secondary.map((service, idx) => (
              <SecondaryServiceCard
                key={service.title}
                service={service}
                index={idx}
              />
            ))}
          </motion.div>

          {canScrollLeft && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-linear-to-r from-primary via-secondary to-accent shadow-lg border border-primary/40 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ChevronLeft className="text-white" size={24} />
            </motion.button>
          )}
          {canScrollRight && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-linear-to-r from-primary via-secondary to-accent shadow-lg border border-primary/40 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ChevronRight className="text-white" size={24} />
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
}

function SecondaryServiceCard({
  service,
  index,
}: {
  service: { title: string; description: string; icon: string; features: string[] };
  index: number;
}) {
  type IconComponent = ComponentType<
    SVGProps<SVGSVGElement> & { size?: number }
  >;
  const Icon = Icons[
    service.icon as keyof typeof Icons
  ] as unknown as IconComponent;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative min-w-85 max-w-95 snap-center rounded-2xl bg-gray-950 hover:bg-gray-900 shadow-lg border border-primary/20 p-8 flex flex-col items-start transition-all duration-300"
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        boxShadow: hovered
          ? "0 6px 32px 0 rgba(251, 191, 36, 0.2)"
          : "0 2px 12px 0 rgba(251, 191, 36, 0.1)",
      }}
    >
      {/* Animated border shine */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none"
        animate={
          hovered
            ? { borderColor: "#fbbf24", boxShadow: "0 0 24px 4px rgba(251, 191, 36, 0.3)" }
            : { borderColor: "transparent", boxShadow: "none" }
        }
        transition={{ duration: 0.5 }}
      />
      {/* Icon with micro animation */}
      <motion.div
        className="mb-6 flex items-center justify-center w-16 h-16 rounded-xl bg-linear-to-br from-primary/20 to-accent/10 shadow-md"
        animate={hovered ? { rotate: [0, 6, -6, 0], scale: [1, 1.08, 1] } : {}}
        transition={{ duration: 0.6 }}
      >
        <Icon className="text-primary" size={32} />
      </motion.div>
      <h4 className="text-2xl md:text-3xl font-bold mb-2 bg-linear-to-r from-white via-primary to-accent bg-clip-text text-transparent">
        {service.title}
      </h4>
      <p className="text-foreground/80 text-base md:text-lg mb-4">
        {service.description}
      </p>
      {/* Bullet points */}
      <ul className="mb-6 space-y-2 text-left">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-foreground/90 text-sm md:text-base">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400" />
            {feature}
          </li>
        ))}
      </ul>
      <motion.a
        href="#contact"
        className="mt-auto px-6 py-2 rounded-full bg-linear-to-r from-primary via-secondary to-accent text-white hover:text-amber-400 hover:border-amber-400 font-semibold text-base shadow-md border border-primary/30 hover:shadow-lg transition-all duration-300"
        whileHover={{ scale: 1.05, backgroundPosition: "100% 0" }}
      >
        Discuss this service
      </motion.a>
    </motion.div>
  );
}

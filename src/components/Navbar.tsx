"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // avoid synchronous setState in effect to satisfy lint rule
    const id = window.setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Get all sections (typed as HTMLElement so offsetTop/clientHeight exist)
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY + 200;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute("id") || "home";
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  if (!mounted) {
    return (
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
        <div className="glass rounded-full px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-gradient">H</div>
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm transition-colors hover:text-primary"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden md:block">
              <Button size="sm" asChild>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hire Me!
                </Link>
              </Button>
            </div>
            <button className="md:hidden">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? "w-[95%] max-w-6xl" : "w-[90%] max-w-5xl"
      }`}
    >
      <div className={`glass rounded-full px-6 py-3 ${scrolled ? "glow" : ""}`}>
        <div className="flex items-center justify-between">
          <motion.div
            className="text-xl font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
          >
            H
          </motion.div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm transition-colors z-10 ${
                  activeSection === item.href.slice(1)
                    ? "text-white"
                    : "hover:text-primary"
                }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-linear-to-r from-primary via-secondary to-primary rounded-full -z-10 glow"
                    style={{
                      boxShadow:
                        "0 0 20px rgba(251, 191, 36, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.3)",
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button size="sm" asChild>
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire Me!
              </Link>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 glass rounded-2xl p-6"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg hover:text-primary transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-primary font-semibold"
                      : ""
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <Button className="w-full" asChild>
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Hire Me!
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Github, Linkedin } from "lucide-react"
import { portfolioData } from "@/data/portfolio"

const socialLinks = [
  { icon: Mail, href: `mailto:${portfolioData.email}`, label: "Email", color: "from-amber-400 to-yellow-500" },
  { icon: Linkedin, href: portfolioData.linkedin, label: "LinkedIn", color: "from-yellow-400 to-amber-400" },
  { icon: Github, href: portfolioData.github, label: "GitHub", color: "from-amber-300 to-amber-500" },
]

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-foreground/60 text-lg">Let&apos;s work together on your next project</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4">Let&apos;s talk about everything!</h3>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              Have a project in mind? Looking for a developer? Or just want to say hi? 
              Feel free to reach out through any of these channels!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {socialLinks?.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="glass rounded-2xl p-8 group hover:bg-white/10 transition-all relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-amber-400/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className={`w-16 h-16 bg-linear-to-br ${social.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/20`}>
                    <social.icon className="text-black" size={28} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{social.label}</h4>
                  <p className="text-foreground/60 text-sm">
                    {social.label === "Email" && portfolioData.email}
                    {social.label === "LinkedIn" && "Connect with me"}
                    {social.label === "GitHub" && "@" + portfolioData.github.split("/").pop()}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

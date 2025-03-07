"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-primary/20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 max-w-4xl"
      >
        <h1 className="text-4xl md:text-7xl font-bold mb-6 font-poppins">
          <span className="block">Olá, eu sou</span>
          <span className="text-gradient text-5xl md:text-8xl">Luciano Natan</span>
        </h1>

        <div className="text-xl md:text-3xl font-light mb-8 h-16">
          <TypeAnimation
            sequence={[
              "Desenvolvedor Front-end",
              2000,
              "Especialista em React",
              2000,
              "UI/UX Enthusiast",
              2000,
              "Criador de Experiências Web",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
            className="font-poppins"
          />
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <a
            href="https://www.linkedin.com/in/lucianonatan/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-primary hover:bg-primary-light transition-all duration-300 font-medium"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/devlnatan"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border-gradient bg-transparent hover:bg-black/30 transition-all duration-300 font-medium"
          >
            GitHub
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#sobre" className="text-white/70 hover:text-white transition-colors">
          <ArrowDown size={32} />
        </a>
      </div>

      {/* Elementos decorativos estáticos */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/20 opacity-50"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 rounded-full bg-secondary/20 opacity-50"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-primary/10 opacity-50"></div>
    </section>
  )
}


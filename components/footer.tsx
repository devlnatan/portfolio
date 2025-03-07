"use client"

import { motion } from "framer-motion"
import { Linkedin, Github, Mail, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="py-12 px-4 relative border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-0"
          >
            <h2 className="text-2xl font-bold font-poppins">Luciano Natan</h2>
            <p className="text-gray-400 mt-2">Desenvolvedor Front-end</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            <a
              href="https://www.linkedin.com/in/lucianonatan/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/devlnatan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:contato@lucianonatan.com"
              className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-zinc-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Luciano Natan. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            Voltar ao topo <ArrowUp size={14} />
          </button>
        </motion.div>
      </div>
    </footer>
  )
}


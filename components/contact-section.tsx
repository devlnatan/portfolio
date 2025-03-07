"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contato" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Tem um projeto em mente ou quer conversar sobre oportunidades? Entre em contato comigo!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-8 border-gradient h-full"
          >
            <h3 className="text-2xl font-bold mb-8 font-poppins">Informações de contato</h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-primary-light" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-lg">Email</h4>
                  <a href="mailto:lnatan.dev@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    lnatan.dev@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Linkedin size={24} className="text-primary-light" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-lg">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/lucianonatan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    linkedin.com/in/lucianonatan
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Github size={24} className="text-primary-light" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-lg">GitHub</h4>
                  <a
                    href="https://github.com/devlnatan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    github.com/devlnatan
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-primary-light" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-lg">Telefone</h4>
                  <p className="text-gray-300">Disponível mediante contato por email</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="glass rounded-xl p-8 border-gradient">
              <h3 className="text-2xl font-bold mb-6 font-poppins">Vamos trabalhar juntos!</h3>
              <p className="text-gray-300 mb-6">
                Estou disponível para projetos freelance, oportunidades de trabalho e colaborações. Ficarei feliz em
                discutir como posso ajudar a transformar suas ideias em realidade.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/lucianonatan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-primary hover:bg-primary-light transition-all duration-300 font-medium flex items-center gap-2"
                >
                  <Linkedin size={18} /> Conecte-se no LinkedIn
                </a>
                <a
                  href="mailto:lnatan.dev@gmail.com"
                  className="px-6 py-3 rounded-full border-gradient bg-transparent hover:bg-black/30 transition-all duration-300 font-medium flex items-center gap-2"
                >
                  <Mail size={18} /> Envie um email
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-8 border-gradient"
            >
              <h3 className="text-xl font-bold mb-4 font-poppins">Localização</h3>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-primary-light" />
                </div>
                <div>
                  <p className="text-gray-300">
                    Trabalho remotamente de qualquer lugar do Brasil, disponível para projetos nacionais e
                    internacionais.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Code, Palette, Zap, Layers, Globe, Wind } from "lucide-react"

const skills = [
  { name: "HTML", icon: <Code size={24} /> },
  { name: "CSS", icon: <Palette size={24} /> },
  { name: "JavaScript", icon: <Zap size={24} /> },
  { name: "TypeScript", icon: <Layers size={24} /> },
  { name: "React", icon: <Globe size={24} /> },
  { name: "Tailwind", icon: <Wind size={24} /> },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="sobre" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Sou um desenvolvedor front-end apaixonado por criar interfaces interativas e experiências digitais
            inovadoras. Meu objetivo é transformar ideias em código, combinando design e funcionalidade para entregar
            produtos web excepcionais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border-gradient glass animate-pulse-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 mix-blend-overlay"></div>
              <div className="p-8 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 font-poppins">Minha Jornada</h3>
                <p className="text-gray-300 mb-6">
                  Minha paixão pela programação front-end começou com a curiosidade de entender como as interfaces web
                  são construídas. Desde então, venho aprimorando minhas habilidades e explorando novas tecnologias para
                  criar experiências digitais memoráveis.
                </p>
                <p className="text-gray-300">
                  Acredito que o bom design e a funcionalidade andam de mãos dadas. Meu objetivo é criar interfaces que
                  não apenas pareçam boas, mas que também proporcionem uma experiência de usuário excepcional.
                </p>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 font-poppins"
            >
              Tecnologias que <span className="text-gradient">Domino</span>
            </motion.h3>

            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={skillVariants}
                  className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 border border-primary/20"
                  style={{
                    background: "linear-gradient(145deg, rgba(139, 92, 246, 0.1), rgba(30, 64, 175, 0.1))",
                  }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-primary/20">
                    {skill.icon}
                  </div>
                  <h4 className="font-medium text-primary-light">{skill.name}</h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}


"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Flores",
    description: "Um site elegante e responsivo para uma floricultura online.",
    image: "/placeholder.svg?height=600&width=800",
    url: "https://flowers-flame-alpha.vercel.app",
    tags: ["React", "CSS", "JavaScript", "HTML", "Responsive Design", "E-commerce"],
  },
  {
    id: 2,
    title: "Starbucks",
    description: "Clone da interface do Starbucks com animações suaves e design moderno.",
    image: "/placeholder.svg?height=600&width=800",
    url: "https://starbucks-alpha-wine.vercel.app",
    tags: ["HTML", "CSS", "JavaScript", "Animations", "Responsive Design"],
  },
  {
    id: 3,
    title: "Devsla",
    description: "Recriação da interface da Tesla com foco em performance e design.",
    image: "/placeholder.svg?height=600&width=800",
    url: "https://devsla-ivory.vercel.app",
    tags: ["React", "Tailwind", "JavaScript", "Performance Optimization", "UI/UX"],
  },
  {
    id: 4,
    title: "Awax",
    description: "Site institucional com design criativo e interações dinâmicas.",
    image: "/placeholder.svg?height=600&width=800",
    url: "https://awax-three.vercel.app",
    tags: ["HTML", "CSS", "JavaScript", "Interactive Design", "Animations"],
  },
  {
    id: 5,
    title: "Notícias-cidade",
    description: "Portal de notícias com layout responsivo e organização de conteúdo eficiente.",
    image: "/placeholder.svg?height=600&width=800",
    url: "https://city-news-navy.vercel.app",
    tags: ["HTML", "CSS", "Responsive Design", "Content Management"],
  },
  {
    id: 6,
    title: "LN Learning English",
    description: "Plataforma para aprendizado de idiomas com recursos interativos.",
    image: "/placeholder.svg?height=600&width=800",
    url: "https://lnlearningenglish.vercel.app",
    tags: ["React", "TypeScript", "Tailwind", "Educational Technology", "Interactive Learning", "API Integration"],
  },
]

export default function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Explore alguns dos meus trabalhos mais recentes. Cada projeto representa um desafio único e demonstra
            diferentes habilidades e tecnologias.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="text-xs px-2 py-1 rounded-full bg-primary/80 whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-poppins">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary hover:bg-primary-light transition-all duration-300 text-sm font-medium"
                >
                  Visitar Projeto <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


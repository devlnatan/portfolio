"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const animationFrameId = useRef<number | null>(null)
  const mousePosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        initParticles()
      }
    }

    const initParticles = () => {
      particles.current = []
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100)

      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(
            Math.random() * 100 + 100,
          )}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.1})`,
        })
      }
    }

    const drawParticles = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.current.forEach((particle, index) => {
        // Atualizar posição
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Verificar limites
        if (particle.x > canvas.width) particle.x = 0
        else if (particle.x < 0) particle.x = canvas.width

        if (particle.y > canvas.height) particle.y = 0
        else if (particle.y < 0) particle.y = canvas.height

        // Efeito de atração do mouse
        const dx = mousePosition.current.x - particle.x
        const dy = mousePosition.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          const angle = Math.atan2(dy, dx)
          const force = (150 - distance) / 1500

          particle.speedX += Math.cos(angle) * force
          particle.speedY += Math.sin(angle) * force
        }

        // Limitar velocidade
        const maxSpeed = 2
        const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY)

        if (speed > maxSpeed) {
          particle.speedX = (particle.speedX / speed) * maxSpeed
          particle.speedY = (particle.speedY / speed) * maxSpeed
        }

        // Desenhar partícula
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Conectar partículas próximas
        for (let j = index + 1; j < particles.current.length; j++) {
          const otherParticle = particles.current[j]
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        }
      })

      animationFrameId.current = requestAnimationFrame(drawParticles)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)

    resizeCanvas()
    drawParticles()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)

      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    />
  )
}


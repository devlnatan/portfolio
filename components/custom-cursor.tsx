"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const onMouseEnter = () => setVisible(true)
    const onMouseLeave = () => setVisible(false)

    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseenter", onMouseEnter)
    document.addEventListener("mouseleave", onMouseLeave)

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
    }
  }, [])

  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null
  }

  return (
    <div
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-white mix-blend-difference pointer-events-none z-50 transition-opacity duration-300"
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
        opacity: visible ? 1 : 0,
      }}
    />
  )
}


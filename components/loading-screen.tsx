"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-8 font-poppins">
          <span className="text-gradient">Luciano Natan</span>
        </h1>

        <div className="w-64 h-1 bg-zinc-800 rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-secondary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>

        <p className="text-gray-400">Carregando experiência...</p>
      </motion.div>
    </div>
  )
}


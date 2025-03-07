import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Luciano Natan | Desenvolvedor Front-end",
  description:
    "Portfólio de Luciano Natan - Desenvolvedor Front-end especializado em criar experiências web inovadoras e interativas",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}



import './globals.css'
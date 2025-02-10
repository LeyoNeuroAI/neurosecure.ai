import "./globals.css"
import { Fraunces, Source_Serif_4 } from "next/font/google"
import type React from "react"
import { Analytics } from '@vercel/analytics/next';




const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
})

export const metadata = {
  title: "NeuroSecure.ai - Secure Productivity Assistants",
  description: "NeuroSecure.ai is a Safety First GenAI powered SaaS platform that helps you effeciently increase your Startups Productivity.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${sourceSerif.variable} font-serif bg-[#E5DDD3] text-gray-800`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}


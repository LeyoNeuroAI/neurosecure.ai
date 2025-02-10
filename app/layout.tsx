import "./globals.css"
import { Fraunces, Source_Serif_4 } from "next/font/google"
import type React from "react"
import { Analytics } from '@vercel/analytics/next';
import { cookies } from "next/headers"





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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const cookieStore = await cookies()
  const consentGiven = cookieStore.get("cookie-consent")
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${sourceSerif.variable} font-serif bg-[#E5DDD3] text-gray-800`}>
        {children}
        {consentGiven && consentGiven.value === "true" && <Analytics />}
      </body>
    </html>
  )
}


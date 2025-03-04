import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import './globals.css'
import {CookieConsent} from "@/components/CookieConsent";
import {AnalyticsProvider} from "@/components/analytics-provider";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "NeuroSecure.ai - Secure AI Assistants for Startups",
  description: "Privacy-first AI that helps startups create, automate, and scale with confidence.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}
      <CookieConsent />
      <AnalyticsProvider />
      <Footer />
      </body>
    </html>
  )
}




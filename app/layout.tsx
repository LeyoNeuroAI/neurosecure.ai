import "./globals.css"
import { Fraunces, Source_Serif_4 } from "next/font/google"
import type React from "react"
import { Analytics } from '@vercel/analytics/next';
import { cookies } from "next/headers"
import type { Metadata } from "next"





const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://neurosecure.ai"),
  title: {
    default: "Neurosecure.ai",
    template: "%s | Neurosecure.ai",
  },
  description: " Productivity AI Assistants, Agents, Workflows, Automation, Cyber Security  software as a service for startups",
  keywords: ["chatgpt software amsterdam", "chatgpt software brussels","Microsoft Copilot Software", "Claude Language Model", "Deepseek ai", "Grok Chatbot"],
  authors: [{ name: "Neurosecure Team", url: "https://neurosecure.ai" }],
  creator: "Neurosecure BV",
  publisher: "Neurosecure BV",

  openGraph: {
    title: "Neurosecure.ai",
    description: "Safe GenAI productivity Assistants",
    url: "https://neurosecure.ai",
    siteName: "Neurosecure.ai",
    images: [
      {
        url: "/og_image.png", // You'll need to create this
        width: 1200,
        height: 630,
        alt: "Neurosecure.ai - Safe GenAI productivity Assistants",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neurosecure.ai",
    description: "Safe GenAI productivity Assistants",
    creator: "@neurosecure",
    images: ["/og_image.png"], // You'll need to create this
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      me: ["https://neurosecure.ai", "mailto:create@neurosecure.ai"],
    },
  },
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


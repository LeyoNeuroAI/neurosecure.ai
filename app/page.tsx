import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Security from "./components/Security"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import { cookies } from "next/headers"
import CookieConsent from "@/components/CookieConsent"

export default async function Home() {

        const cookieStore = await cookies()
        const consentGiven = cookieStore.get("cookie-consent")




    return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Security />
      <CTA />
      <Footer />
        {!consentGiven && <CookieConsent />}
    </main>
  )
}


import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Security from "./components/Security"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Security />
      <CTA />
      <Footer />
    </main>
  )
}


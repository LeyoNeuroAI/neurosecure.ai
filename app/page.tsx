"use client"

import Image from "next/image"
import Link from "next/link"
import LoginForm from "@/components/login-form"
import PricingSection from "@/components/pricing-section"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"
import {Shield} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          <span>NeuroSecure.ai</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </Link>
          <Link
            href="https://beta.neurosecure.ai/register"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors"
          >
            Sign Up
          </Link>
        </nav>
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      <main className="flex-grow">
        <section className="bg-slate-50">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 py-16 px-4">
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Safe Personal AI Assistants for Grant Writing, Policy Generation and Marketing <br />
              </h1>

              <div className="pt-4">
                <LoginForm />
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <Image
                src="/grant.png"
                alt="Privacy Policy Generator Interface"
                width={800}
                height={800}
                className="rounded-xl object-contain w-full h-auto"
                priority
              />
            </div>
          </div>
        </section>

        <section id="features" className="py-20 px-4">
          <div className="container mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Supercharge your startup with AI powered Assistants
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform helps startups automate tasks, create compelling content, and scale operations
              efficiently.
            </p>
          </div>

          <div className="container mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-sm border text-center">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Grant Writing Assistant</h3>
              <p className="text-muted-foreground">
                Streamline your grant writing process with AI-powered assistance. Generate compelling proposals, track
                opportunities, and increase your success rate in securing funding.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-sm border text-center">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Policy Generator</h3>
              <p className="text-muted-foreground">
                Create compliant privacy policies, terms & conditions, and legal documents with our AI-powered policy
                generator that helps protect your business.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-sm border text-center">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Marketing Content Assistant</h3>
              <p className="text-muted-foreground">
                Create engaging marketing content and emails that drive results. Our AI helps optimize your content for
                SEO, craft compelling email campaigns, and personalize donor outreach at scale while maintaining your
                brand's authentic voice.
              </p>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-slate-50 py-20 px-4">
          <PricingSection />
        </section>

        <section id="faq" className="py-20 px-4">
          <FaqSection />
        </section>
      </main>


    </div>
  )
}


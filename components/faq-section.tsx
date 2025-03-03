"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: "What is NeuroSecure.ai?",
    answer:
      "NeuroSecure.ai is an AI-powered platform designed specifically for startups and small businesses. We provide secure, privacy-focused AI assistants that help with content creation, automation, and scaling operations efficiently.",
  },
  {
    question: "How does the free trial work?",
    answer:
      "All our plans come with a 14-day free trial. You can sign up without a credit card and explore all the features of your chosen plan. We'll send you a reminder before your trial ends, and you can cancel anytime.",
  },
  {
    question: "Is my data secure with NeuroSecure.ai?",
    answer:
      "Absolutely. Security is in our name for a reason. We use enterprise-grade encryption, don't train our models on your data, and comply with GDPR, CCPA, and other privacy regulations. Your data remains yours, and we provide detailed controls for data retention and usage.",
  },
  {
    question: "Can I upgrade or downgrade my plan later?",
    answer:
      "Yes, you can change your plan at any time. If you upgrade, the new features will be available immediately, and we'll prorate your billing. If you downgrade, the changes will take effect at the start of your next billing cycle.",
  },
  {
    question: "Do you offer custom solutions for specific industries?",
    answer:
      "Yes, our Enterprise plan includes custom AI model training and solutions tailored to your industry. We have experience working with healthcare, finance, legal, and many other regulated industries with specific compliance requirements.",
  },
  {
    question: "How do I get support if I have questions?",
    answer:
      "All plans include email support. Pro plans and above get priority support with faster response times. Enterprise customers receive a dedicated account manager for personalized assistance.",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Have questions? We're here to help.</p>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-slate-200 last:border-0">
            <button
              onClick={() => toggleFaq(index)}
              className="flex justify-between items-center w-full py-6 text-left"
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96 pb-6" : "max-h-0"
              }`}
            >
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


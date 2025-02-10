"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, FileText, PenSquare, Globe, Bot, BrainCircuit } from "lucide-react"
import Image from "next/image"

const features = [
  {
    id: "grant-writing",
    title: "Grant Writing Assistant",
    icon: <FileText className="w-5 h-5" />,
    description: "Craft compelling grant applications with AI assistance.",
    image: "/icons/grant-writing.svg",
    tools: ["Template Library", "Smart Editor", "Budget Calculator", "Timeline Generator", "Success Metrics"],
  },
  {
    id: "pitch-deck",
    title: "Pitch Deck Creator",
    icon: <PenSquare className="w-5 h-5" />,
    description: "Create investor-ready pitch decks in minutes.",
    image: "/icons/pitch-deck.svg",
    tools: ["Slide Templates", "Story Builder", "Design Tools", "Market Insights", "Export Options"],
  },
  {
    id: "website-builder",
    icon: <Globe className="w-5 h-5" />,
    title: "Website Builder",
    description: "Build professional websites optimized for conversions.",
    image: "/icons/website-builder.svg",
    tools: ["Page Builder", "SEO Tools", "Analytics", "Forms", "Integrations"],
  },
  {
    id: "ai-agents",
    title: "Custom AI Agents",
    icon: <Bot className="w-5 h-5" />,
    description: "Deploy specialized AI agents for your business needs.",
    image: "/icons/ai-agents.svg",
    tools: ["Agent Builder", "Training Tools", "Workflow Editor", "Analytics", "Integration API"],
  },
  {
    id: "ai-assistant",
    title: "AI Assistant Suite",
    icon: <BrainCircuit className="w-5 h-5" />,
    description: "Access powerful AI tools for startup growth.",
    image: "/icons/ai-assistant.svg",
    tools: ["Market Research", "Competitor Analysis", "Strategy Planner", "Growth Tools", "Reports"],
  },
]

export default function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState("ai-assistant")

  return (
    <section className="py-24 bg-gradient-to-br from-stone-100 to-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Feature List */}
          <div className="space-y-4">
            {features.map((feature) => (
              <div key={feature.id} className="relative">
                <button
                  onClick={() => setActiveFeature((prevActive) => (prevActive === feature.id ? null : feature.id))}
                  className={`w-full flex items-center justify-between p-6 text-left rounded-lg transition-all ${
                    activeFeature === feature.id ? "bg-white shadow-lg" : "hover:bg-white/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {feature.icon}
                    <span className="text-xl font-semibold">{feature.title}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${activeFeature === feature.id ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {activeFeature === feature.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-2">
                        <p className="text-gray-600 mb-4">{feature.description}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Preview Area */}
          <div className="lg:sticky lg:top-24">
            <div className="relative aspect-[4/3] bg-dot-pattern rounded-xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src={features.find((f) => f.id === activeFeature)?.image || "/icons/default.svg"}
                    alt={features.find((f) => f.id === activeFeature)?.title || ""}
                    width={200}
                    height={200}
                    className="object-contain"
                  />

                  {/* Tools Grid */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="grid grid-cols-5 gap-4">
                      {features
                        .find((f) => f.id === activeFeature)
                        ?.tools.map((tool, index) => (
                          <div
                            key={tool}
                            className="bg-white/90 backdrop-blur-sm p-4 rounded-lg text-center text-sm font-medium"
                          >
                            {tool}
                          </div>
                        ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


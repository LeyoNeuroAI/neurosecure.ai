import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"

export default function Security() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 text-gray-600">
              <Shield className="h-5 w-5" />
              <span className="font-medium">Trust Foundation</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Enterprise-grade security, quality outputs
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Enterprise-grade security and an LLM-agnostic architecture prioritize your data protection & privacy while
              providing superior quality marketing outputs.
            </p>
          
          </div>
          <div className="relative">
            <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              {/* Background gradient */}
              <defs>
                <linearGradient id="bg-gradient" x1="400" y1="0" x2="400" y2="600">
                  <stop offset="0%" stopColor="#F1F5F9" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Background */}
              <rect width="800" height="600" fill="url(#bg-gradient)" />

              {/* GDPR Box */}
              <g transform="translate(200, 150)">
                <path
                  d="M0 0 L160 0 L200 40 L200 180 L40 180 L0 140 Z"
                  fill="#F8FAFC"
                  stroke="#CBD5E1"
                  strokeWidth="2"
                />
                <text x="40" y="90" fill="#475569" fontSize="24" fontWeight="600">
                  GDPR
                </text>
              </g>

              {/* CCPA Box */}
              <g transform="translate(450, 100)">
                <path
                  d="M0 40 L40 0 L200 0 L200 140 L160 180 L0 180 Z"
                  fill="#F8FAFC"
                  stroke="#CBD5E1"
                  strokeWidth="2"
                />
                <text x="60" y="90" fill="#475569" fontSize="24" fontWeight="600">
                  CCPA
                </text>
              </g>

              {/* SOC2 Box */}
              <g transform="translate(300, 300)">
                <path
                  d="M0 40 L40 0 L200 0 L200 140 L160 180 L0 180 Z"
                  fill="#F8FAFC"
                  stroke="#CBD5E1"
                  strokeWidth="2"
                />
                <text x="60" y="100" fill="#475569" fontSize="24" fontWeight="600">
                  SOC2
                </text>
              </g>

              {/* Central Shield */}
              <g transform="translate(350, 200)">
                <path
                  d="M50 0 L100 25 L100 75 C100 100 75 125 50 150 C25 125 0 100 0 75 L0 25 Z"
                  fill="#F8FAFC"
                  stroke="#CBD5E1"
                  strokeWidth="2"
                />
                <path
                  d="M35 75 L45 85 L65 65"
                  stroke="#6B7280"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>

              {/* Connecting Lines */}
              <g stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4">
                <path d="M300 200 L400 150" />
                <path d="M500 200 L400 150" />
                <path d="M400 300 L400 150" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}


import { FileText, PenSquare, Globe, Bot, Sparkles, BrainCircuit } from "lucide-react"

const features = [
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Grant Writing Assistant",
    description:
      "AI-powered assistant to help craft compelling grant applications, increasing your chances of securing funding.",
  },
  {
    icon: <PenSquare className="h-8 w-8 text-primary" />,
    title: "Pitch Deck Creator",
    description: "Generate professional pitch decks that tell your startup's story and attract potential investors.",
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Website Builder",
    description: "Create stunning, conversion-optimized websites and landing pages tailored for startups.",
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "Custom AI Agents",
    description: "Deploy specialized AI agents for customer support, lead generation, and business automation.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Smart Workflows",
    description: "Automate repetitive tasks and streamline your startup operations with intelligent workflows.",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "AI Assistant Suite",
    description: "Access a suite of AI assistants for market research, competitor analysis, and strategic planning.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Supercharge your startup with AI powered Assitants</h2>
          <p className="text-xl text-gray-600">
            Our AI-powered platform helps startups automate tasks, create compelling content, and scale operations
            efficiently.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


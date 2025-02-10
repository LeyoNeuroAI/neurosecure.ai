import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Basic",
    price: "$9",
    features: ["5 Projects", "Basic Analytics", "Email Support"],
  },
  {
    name: "Pro",
    price: "$29",
    features: ["Unlimited Projects", "Advanced Analytics", "Priority Support", "Team Collaboration"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Custom Solutions", "Dedicated Account Manager", "24/7 Phone Support", "On-site Training"],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant={index === 1 ? "default" : "outline"} className="w-full">
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


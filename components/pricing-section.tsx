"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingSection() {
    const handlePlanSelect = (plan: string) => {
        // Using direct window.location.href
        const url = `https://beta.neurosecure.ai/register?plan=${plan}`
        window.open(url, "_blank") // Opens in new tab
        // OR
        // window.location.href = url  // Redirects in same tab
    }

    return (
        <div className="container mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Simple, transparent pricing</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Choose the plan that's right for your business. All plans include a 14-day free trial.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Starter Plan */}
                <div className="bg-card rounded-xl shadow-sm border overflow-hidden">
                    <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2">Free</h3>
                        <p className="text-muted-foreground mb-4">Perfect for small teams and startups</p>
                        <div className="flex items-baseline mb-4">
                            <span className="text-4xl font-bold">0</span>
                            <span className="text-muted-foreground ml-1">/month</span>
                        </div>
                        <Button onClick={() => handlePlanSelect("free")} className="w-full">
                            Start free trial
                        </Button>
                    </div>
                    <div className="border-t border-slate-200 p-6">
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                <span className="text-muted-foreground">1 Free AI Assistant</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                <span className="text-muted-foreground">1 Free Basic Content Generation Template</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                <span className="text-muted-foreground">Community support</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Pro Plan */}
                <div className="bg-card rounded-xl shadow-sm border overflow-hidden">
                    <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2">Pro</h3>
                        <p className="text-muted-foreground mb-4">For growing businesses and teams</p>
                        <div className="flex items-baseline mb-4">
                            <span className="text-4xl font-bold">$15</span>
                            <span className="text-muted-foreground ml-1">/month</span>
                        </div>
                        <Button onClick={() => handlePlanSelect("pro")} className="w-full">
                            Start free trial
                        </Button>
                    </div>
                    <div className="border-t border-slate-200 p-6">
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                <span className="text-muted-foreground">3 Free AI Assistant</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                <span className="text-muted-foreground">3 Free AI Prompt Templates</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                <span className="text-muted-foreground">Advanced content generation</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                <span className="text-muted-foreground">Priority email support</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                <span className="text-muted-foreground">Custom templates</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Enterprise Plan */}
                <div className="bg-card rounded-xl shadow-sm border overflow-hidden">
                    <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
                        <p className="text-muted-foreground mb-4">For large organizations and teams</p>
                        <Button onClick={() => handlePlanSelect("enterprise")} className="w-full">
                            Contact sales
                        </Button>
                    </div>
                    <div className="border-t border-slate-200 p-6">
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                <span className="text-muted-foreground">Unlimited AI Assistants</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                <span className="text-muted-foreground">Unlimited AI Prompt templates</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                <span className="text-muted-foreground">Custom AI Prompt templates</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                <span className="text-muted-foreground">Email and Phone support</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


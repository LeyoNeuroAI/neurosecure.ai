import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="container mx-auto py-6 px-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    NeuroSecure.ai
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
                        Features
                    </Link>
                    <Link href="/#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                        Pricing
                    </Link>
                    <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                        About
                    </Link>
                    <Link
                        href="/signup"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors"
                    >
                        Sign Up
                    </Link>
                </nav>
            </header>

            <main className="flex-grow">
                <section className="container mx-auto px-4 py-24 md:py-32">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Making AI assistants</h1>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">You can trust</h1>
                        </div>
                        <div className="mt-8 max-w-2xl">
                            <p className="text-xl text-muted-foreground">
                                NeuroSecure is a privacy-first AI company. We build secure, transparent, and reliable AI assistants that
                                help startups and small businesses grow with confidence.
                            </p>
                        </div>

                    </div>
                </section>

                <section className="container mx-auto px-4 py-24 border-t">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="grid gap-12 md:grid-cols-2">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight">Our Purpose</h2>
                            </div>
                            <div className="space-y-6">
                                <p className="text-xl">
                                    We believe AI will transform how businesses operate. NeuroSecure is dedicated to making this
                                    transformation secure and accessible, building AI assistants that businesses can rely on while
                                    maintaining complete control over their data.
                                </p>
                                <p className="text-xl">
                                    Our mission is to democratize access to advanced AI capabilities while setting new standards for
                                    privacy and security in AI applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-4 py-24 border-t">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="grid gap-12 md:grid-cols-2">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight">Our Approach</h2>
                            </div>
                            <div className="space-y-6">
                                <p className="text-xl">
                                    We prioritize transparency and control in everything we build. Our AI assistants are designed with
                                    privacy at their core, ensuring your data never trains our models without explicit consent.
                                </p>
                                <p className="text-xl">
                                    By focusing on specific use cases like grant writing, policy generation, and marketing content
                                    creation, we deliver specialized AI assistants that understand your industry's unique requirements and
                                    compliance needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </div>
    )
}


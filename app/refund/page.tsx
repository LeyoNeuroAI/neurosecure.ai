"use client"

import { Button } from "@/components/ui/button"


export default function RefundPolicy() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div className="py-6 md:py-12 lg:py-16">
            <div className="container px-4 md:px-6">
                <div className="prose prose-gray max-w-none dark:prose-invert">
                    <div className="pb-4 space-y-2 border-b border-gray-200 dark:border-gray-800">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Refund Policy</h1>
                        <p className="text-gray-500 dark:text-gray-400">Last updated: February 28, 2025</p>
                    </div>

                    <nav className="my-6 print:hidden">
                        <h2 className="text-lg font-bold mb-2">Table of Contents</h2>
                        <ul className="flex flex-wrap gap-2">
                            {["eligibility", "process", "timeframes", "payment-methods", "exceptions", "contact"].map((section) => (
                                <li key={section}>
                                    <Button variant="outline" size="sm" onClick={() => scrollToSection(section)} className="text-sm">
                                        {section
                                            .split("-")
                                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                            .join(" ")}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="mx-auto prose max-w-none">
                        <p>
                            At NeuroSecure B.V. we strive to ensure your complete satisfaction with our services. This Refund Policy
                            outlines the conditions under which we provide refunds for our subscription services and one-time
                            purchases.
                        </p>

                        <h2 id="eligibility" className="text-xl font-semibold mt-8 mb-4">
                            1. Refund Eligibility
                        </h2>
                        <p>You may be eligible for a refund under the following circumstances:</p>
                        <ul>
                            <li>
                                <strong>Subscription Services:</strong> You may cancel your subscription and request a refund within 14
                                days of the initial purchase or any renewal date.
                            </li>
                            <li>
                                <strong>One-Time Purchases:</strong> You may request a refund within 14 days of purchase if you are not
                                satisfied with the service.
                            </li>
                            <li>
                                <strong>Service Unavailability:</strong> If our services are unavailable for more than 24 consecutive
                                hours, you may be eligible for a prorated refund for the affected period.
                            </li>
                        </ul>

                        <h2 id="process" className="text-xl font-semibold mt-8 mb-4">
                            2. Refund Process
                        </h2>
                        <p>To request a refund, please follow these steps:</p>
                        <ol>
                            <li>
                                Contact our customer support team at support@neurosecure.ai with the subject line &quot;Refund
                                Request&quot;.
                            </li>
                            <li>Include your account email address, the date of purchase, and the reason for your refund request.</li>
                            <li>Our team will review your request and respond within 3 business days.</li>
                            <li>If approved, refunds will be processed to the original payment method used for the purchase.</li>
                        </ol>

                        <h2 id="timeframes" className="text-xl font-semibold mt-8 mb-4">
                            3. Refund Timeframes
                        </h2>
                        <p>Once a refund is approved:</p>
                        <ul>
                            <li>
                                <strong>Credit Card Payments:</strong> Refunds typically appear on your statement within 5-10 business
                                days.
                            </li>
                            <li>
                                <strong>Bank Transfers:</strong> Refunds may take 7-14 business days to process.
                            </li>
                            <li>
                                <strong>Other Payment Methods:</strong> Timeframes vary depending on the payment provider.
                            </li>
                        </ul>

                        <h2 id="payment-methods" className="text-xl font-semibold mt-8 mb-4">
                            4. Supported Payment Methods for Refunds
                        </h2>
                        <p>
                            Refunds will be issued to the original payment method used for the purchase. We support refunds for the
                            following payment methods:
                        </p>
                        <ul>
                            <li>Major credit and debit cards (Visa, Mastercard, American Express)</li>
                            <li>PayPal</li>
                            <li>Bank transfers (for eligible purchases)</li>
                        </ul>

                        <h2 id="exceptions" className="text-xl font-semibold mt-8 mb-4">
                            5. Exceptions and Limitations
                        </h2>
                        <p>The following exceptions apply to our refund policy:</p>
                        <ul>
                            <li>
                                <strong>Promotional or Discounted Purchases:</strong> Services purchased at a promotional or discounted
                                rate may have different refund terms, which will be specified at the time of purchase.
                            </li>
                            <li>
                                <strong>Abuse of Service:</strong> Refunds may be denied if there is evidence of abuse of our services
                                or violation of our Terms and Conditions.
                            </li>
                            <li>
                                <strong>Third-Party Purchases:</strong> For purchases made through third-party platforms (e.g., app
                                stores), refund policies of those platforms will apply.
                            </li>
                        </ul>

                        <h2 id="contact" className="text-xl font-semibold mt-8 mb-4">
                            6. Contact Information
                        </h2>
                        <p>If you have any questions about our Refund Policy, please contact us at:</p>
                        <p>
                            NeuroSecure BV
                            <br />
                            Wigbolt Ripperstraat
                            <br />
                            1067EH Amsterdam
                            <br />
                            Netherlands
                            <br />
                            Email: support@neurosecure.ai
                        </p>
                    </div>





                </div>
            </div>
        </div>
    )
}


import Link from "next/link"
import { Brain } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center border-b">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
          <Brain className="h-8 w-8 text-blue-500" />
          <span>NeuroSecure.ai</span>
        </Link>
      </header>

      <main className="flex-grow container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight mb-8">Terms of Service</h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg mb-6">Last updated: March 04, 2025</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to NeuroSecure.ai. These Terms of Service govern your use of our website and services. By
              accessing or using NeuroSecure.ai, you agree to be bound by these Terms.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Definitions</h2>
            <p>"Service" refers to the NeuroSecure.ai website and AI platform operated by NeuroSecure B.V.</p>
            <p>"User," "You," and "Your" refer to the individual or entity accessing or using the Service.</p>
            <p>"We," "Us," and "Our" refer to NeuroSecure, B.V.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. Account Registration</h2>
            <p>
              To use certain features of the Service, you must register for an account. You agree to provide accurate
              information and keep it updated. You are responsible for maintaining the security of your account and
              password.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. Acceptable Use</h2>
            <p>
              You agree not to use the Service for any unlawful purpose or in any way that could damage, disable, or
              impair the Service. You may not use the Service to generate content that is harmful, abusive, or violates
              the rights of others.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are owned by NeuroSecure, B.V.. and are
              protected by international copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. User Content</h2>
            <p>
              You retain ownership of any content you submit to the Service. By submitting content, you grant us a
              worldwide, non-exclusive license to use, reproduce, and display your content in connection with providing
              the Service.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Privacy</h2>
            <p>
              Your use of the Service is also governed by our Privacy Policy, which can be found at{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                neurosecure.ai/privacy
              </Link>
              .
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">8. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the Service immediately, without prior notice, for
              conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">9. Limitation of Liability</h2>
            <p>
              In no event shall NeuroSecure, B.V. be liable for any indirect, incidental, special, consequential, or
              punitive damages resulting from your use of or inability to use the Service.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of significant changes by
              posting the new Terms on the Service and updating the "Last updated" date.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">11. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:legal@neurosecure.ai" className="text-purple-600 hover:underline">
                support@neurosecure.ai
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-slate-100 py-6 px-4 border-t">
        <div className="container mx-auto text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} NeuroSecure B.V. All rights reserved.
        </div>
      </footer>
    </div>
  )
}


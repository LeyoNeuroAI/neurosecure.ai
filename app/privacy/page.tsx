import Link from "next/link"
import { Shield} from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center border-b">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
          <Shield className="h-8 w-8 text-blue-500" />
          <span>NeuroSecure.ai</span>
        </Link>
      </header>

      <main className="flex-grow container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight mb-8">Privacy Policy</h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg mb-6">Last updated: February 28, 2025</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              At NeuroSecure B.V., we take your privacy seriously. This Privacy Policy explains how we collect, use, and
              protect your personal information when you use our website and services.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <p>
              <strong>Personal Information:</strong> We may collect your name, email address, and other contact details
              when you register for an account or contact us.
            </p>
            <p>
              <strong>Usage Data:</strong> We collect information about how you interact with our Service, including the
              features you use and the time spent on the platform.
            </p>
            <p>
              <strong>Content Data:</strong> We process the content you input into our AI system to provide our
              services.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative messages and updates</li>
              <li>Respond to your comments and questions</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information.
              However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot
              guarantee absolute security.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services and fulfill the
              purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Your Rights</h2>
            <p>Depending on your location, you may have rights regarding your personal information, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction or objection to processing</li>
              <li>Data portability</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our Service and hold certain
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
              sent.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">8. Third-Party Services</h2>
            <p>
              Our Service may contain links to third-party websites or services that are not owned or controlled by
              NeuroSecure.ai. We have no control over and assume no responsibility for the content, privacy policies, or
              practices of any third-party websites or services.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">9. Children's Privacy</h2>
            <p>
              Our Service is not intended for use by children under the age of 13. We do not knowingly collect personal
              information from children under 13.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">10. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@neurosecure.ai" className="text-primary hover:underline">
                privacy@neurosecure.ai
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-slate-100 py-6 px-4 border-t">
        <div className="container mx-auto text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} NeuroSecure, B.V.. All rights reserved.
        </div>
      </footer>
    </div>
  )
}


import Link from "next/link"
import { Twitter, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">neurosecure.ai</h3>
            <p className="text-sm text-gray-600">AI-powered startup productivity assistant platform</p>
          </div>
         
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-900">Connect</h4>
            <div className="flex space-x-4">
            
              <Link href="https://www.linkedin.com/in/leoroland/" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://github.com/LeoJavaAI" className="text-gray-600 hover:text-gray-900">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} neurosecure.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


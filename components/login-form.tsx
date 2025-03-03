"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChromeIcon as Google } from "lucide-react"
import Link from "next/link"

export default function LoginForm() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Email submitted:", email)
    const encodedEmail = encodeURIComponent(email)
    window.location.href = `https://beta.neurosecure.ai/register?email=${encodedEmail}`

  }

  return (
    <div className="w-full max-w-md bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
      <div className="space-y-4">
       

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-slate-200" />
          </div>
         
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full">
            Continue with email
          </Button>
        </form>

        <p className="text-xs text-center text-slate-500 mt-4">
          By continuing, you agree to NeuroSecure BV's{" "}
          <Link href="/terms" className="text-foreground hover:text-foreground/80">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-foreground hover:text-foreground/80">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  )
}


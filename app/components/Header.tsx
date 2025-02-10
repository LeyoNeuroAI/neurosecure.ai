import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WaitlistForm } from "./WaitlistForm"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Header() {
  return (
      <header className="bg-white py-4 sticky top-0 z-10 shadow-sm">
        <div className="container flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            NeuroSecure.ai
          </Link>

          <div className="hidden md:flex items-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary-dark text-white">Join the waitlist</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Join the Waitlist</DialogTitle>
                  <DialogDescription>Fill out this form to get early access to our platform.</DialogDescription>
                </DialogHeader>
                <WaitlistForm />
              </DialogContent>
            </Dialog>
          </div>
          <button className="md:hidden text-gray-600">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
  )
}


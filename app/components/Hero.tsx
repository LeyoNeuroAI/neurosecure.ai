import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { WaitlistForm } from "./WaitlistForm"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Hero() {
  return (
    <section className="relative bg-[#E5DDD3] pt-8">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto pb-20">
          <h1 className="text-5xl md:text-7xl mb-8 leading-tight">
            Safe and Secure Productivity Assistants and Agents for your <u>Start Up</u> 
          </h1>
          <p className="text-xl text-gray-800 mb-12 max-w-2xl mx-auto leading-relaxed">
            Elevate your Start Up, your Brand, and your Revenues with Tech Automation, Workflows and some A.I. that's
            secure and personalized for productivity.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary-dark text-white flex items-center gap-2 mx-auto rounded-full"
              >
                Join the waitlist
                <ArrowRight className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Join the Waitlist</DialogTitle>
                <DialogDescription>Fill out this form to get early access to our platform.</DialogDescription>
              </DialogHeader>
              <WaitlistForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}


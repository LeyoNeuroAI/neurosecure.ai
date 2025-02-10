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

export default function CTA() {
  return (
    <section className="py-24 bg-primary">
      <div className="container text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-white">Be first in line for the future of AI marketing</h2>
          <p className="text-xl mb-8 text-stone-200">
            Join thousands of forward-thinking marketers and get early access to our revolutionary AI platform.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 bg-white text-primary hover:bg-stone-50 flex items-center gap-2 mx-auto"
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


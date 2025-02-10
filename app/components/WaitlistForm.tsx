"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { countries } from "@/lib/countries"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid business email.",
  }),
  startupName: z.string().min(2, {
    message: "Startup name must be at least 2 characters.",
  }),
  startupWebsite: z.string().url({
    message: "Please enter a valid URL.",
  }),
  country: z.string().min(1, {
    message: "Please select a country.",
  }),
  productivityIssue: z.string().min(10, {
    message: "As a Startup founder, what is the most pressing productivity issue you have? Min 10 words",
  }),
  priceWillingToPay: z.string().min(1, {
    message: "What price would you pay for secure productivity assistants?",
  }),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to receive emails from us.",
  }),
})

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      startupName: "",
      startupWebsite: "",
      country: "",
      productivityIssue: "",
      priceWillingToPay: "",
      consent: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    console.log("Form values:", values)
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      const data = await response.json()
      toast({
        title: "Success!",
        description: data.message || "You've been added to our waitlist.",
      })
      form.reset()
      setSuccessMessage("Thanks! We will be in touch.")

      // Scroll to the bottom of the form
      setTimeout(() => {
        const formElement = document.querySelector("form")
        if (formElement) {
          formElement.scrollIntoView({ behavior: "smooth", block: "end" })
        }
      }, 100)
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Error",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
      <div className="relative  overflow-y-auto px-4 py-2 -mx-4 sm:px-0 sm:mx-0">
        {successMessage && (
            <div
                className="fixed bottom-4 left-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md shadow-md"
                role="alert"
            >
              <span className="block sm:inline">{successMessage}</span>
            </div>
        )}
        <form
            onSubmit={(e) => {
              setSuccessMessage("")
              form.handleSubmit(onSubmit)(e)
            }}
            className="space-y-6"
        >
          <div className="space-y-1 mb-4">
            <Label htmlFor="name" className="flex items-center">
              Your Name <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input id="name" {...form.register("name")} required />
            {form.formState.errors.name && <p className="text-red-500">{form.formState.errors.name.message}</p>}
          </div>

          <div className="space-y-1 mb-4">
            <Label htmlFor="email" className="flex items-center">
              Business Email <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input id="email" type="email" {...form.register("email")} required />
            {form.formState.errors.email && <p className="text-red-500">{form.formState.errors.email.message}</p>}
          </div>

          <div className="space-y-1 mb-4">
            <Label htmlFor="startupName" className="flex items-center">
              Startup Registered Name <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input id="startupName" {...form.register("startupName")} required />
            {form.formState.errors.startupName && (
                <p className="text-red-500">{form.formState.errors.startupName.message}</p>
            )}
          </div>

          <div className="space-y-1 mb-4">
            <Label htmlFor="startupWebsite" className="flex items-center">
              Startup Website URL <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input id="startupWebsite" type="url" {...form.register("startupWebsite")} required />
            {form.formState.errors.startupWebsite && (
                <p className="text-red-500">{form.formState.errors.startupWebsite.message}</p>
            )}
          </div>

          <div className="space-y-1 mb-4">
            <Label htmlFor="country" className="flex items-center">
              Country <span className="text-red-500 ml-1">*</span>
            </Label>
            <Select onValueChange={(value) => form.setValue("country", value)} required>
              <SelectTrigger>
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      {country.name}
                    </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {form.formState.errors.country && <p className="text-red-500">{form.formState.errors.country.message}</p>}
          </div>

          <div className="space-y-1 mb-4">
            <Label htmlFor="productivityIssue" className="flex items-center">
              What is your main productivity issue? <span className="text-red-500 ml-1">*</span>
            </Label>
            <Textarea id="productivityIssue" {...form.register("productivityIssue")} required />
            {form.formState.errors.productivityIssue && (
                <p className="text-red-500">{form.formState.errors.productivityIssue.message}</p>
            )}
          </div>

          <div className="space-y-1 mb-4">
            <Label htmlFor="priceWillingToPay" className="flex items-center">
              What price would you pay to increase your productivity? <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input id="priceWillingToPay" {...form.register("priceWillingToPay")} required />
            {form.formState.errors.priceWillingToPay && (
                <p className="text-red-500">{form.formState.errors.priceWillingToPay.message}</p>
            )}
          </div>

          <div className="flex items-start space-x-2 mb-4">
            <Checkbox
                id="consent"
                checked={form.watch("consent")}
                onCheckedChange={(checked) => form.setValue("consent", checked)}
                className="mt-1"
            />
            <Label
                htmlFor="consent"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to receive emails from NeuroSecure.ai about their products and services.{" "}
              <span className="text-red-500">*</span>
            </Label>
          </div>
          {form.formState.errors.consent && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.consent.message}</p>
          )}

          <p className="text-sm text-gray-500">
            Fields marked with <span className="text-red-500">*</span> are required.
          </p>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Submitting..." : "Join Waitlist"}
          </Button>
        </form>
      </div>
  )
}


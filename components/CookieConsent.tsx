"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieConsent() {
    const [showConsent, setShowConsent] = useState(false)

    useEffect(() => {
        // Check if user has already made a choice
        const cookieConsent = localStorage.getItem("cookie-consent")
        if (cookieConsent === null) {
            setShowConsent(true)
        }
    }, [])

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "accepted")
        setShowConsent(false)

        // Reload the page to enable analytics
        window.location.reload()
    }

    const declineCookies = () => {
        localStorage.setItem("cookie-consent", "declined")
        setShowConsent(false)
    }

    if (!showConsent) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 shadow-lg z-50">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex-1">
                    <p className="text-sm">
                        We use cookies to improve your experience and analyze website traffic. By clicking "Accept", you agree to
                        our website's cookie use as described in our Privacy Policy.
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={declineCookies}>
                        Decline
                    </Button>
                    <Button size="sm" onClick={acceptCookies}>
                        Accept
                    </Button>
                    <Button variant="ghost" size="sm" className="p-0 h-8 w-8" onClick={declineCookies}>
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}


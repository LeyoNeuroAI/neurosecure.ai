"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(true)

    const handleCookiePreference = async (accept: boolean) => {
        await fetch("/api/set-cookie", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ accept }),
        })
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-100 p-4 flex justify-between items-center">
            <p>We use cookies to improve your experience. Do you accept?</p>
            <div className="space-x-2">
                <Button onClick={() => handleCookiePreference(false)} variant="outline">
                    Reject
                </Button>
                <Button onClick={() => handleCookiePreference(true)}>Accept</Button>
            </div>
        </div>
    )
}


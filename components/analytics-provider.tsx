"use client"


import { useEffect, useState } from "react"
import {Analytics} from "@vercel/analytics/next";

export function AnalyticsProvider() {
    const [cookiesAccepted, setCookiesAccepted] = useState(false)

    useEffect(() => {
        const cookieConsent = localStorage.getItem("cookie-consent")
        setCookiesAccepted(cookieConsent === "accepted")

        // Listen for changes to cookie consent
        const handleStorageChange = () => {
            const updatedConsent = localStorage.getItem("cookie-consent")
            setCookiesAccepted(updatedConsent === "accepted")
        }

        window.addEventListener("storage", handleStorageChange)
        return () => window.removeEventListener("storage", handleStorageChange)
    }, [])

    // Always render Analytics but disable tracking if consent not given
    return <Analytics mode={cookiesAccepted ? "production" : "development"} />
}


"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="p-4 bg-white shadow-lg border border-gray-200">
        <div className="space-y-3">
          <p className="text-sm text-gray-700">
            We use cookies to enhance your browsing experience and provide personalized content. By continuing to use
            our site, you agree to our use of cookies.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button onClick={acceptCookies} className="bg-primary-600 hover:bg-primary-700 text-white flex-1">
              Accept All
            </Button>
            <Button onClick={declineCookies} variant="outline" className="flex-1 bg-transparent">
              Decline
            </Button>
          </div>
          <p className="text-xs text-gray-500">
            Learn more in our{" "}
            <Link href="/cookie-policy" className="text-primary-600 hover:underline">
              Cookie Policy
            </Link>
          </p>
        </div>
      </Card>
    </div>
  )
}

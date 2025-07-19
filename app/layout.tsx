import type React from "react"
import type { Metadata } from "next"
import { Arvo } from "next/font/google"
import "./globals.css"
import { CookieBanner } from "@/components/cookie-banner"

const inter = Arvo({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "HyperLend - Professional Cleaning Services",
  description:
    "Professional cleaning services for offices, homes, apartments, and furniture. Post-renovation cleaning specialists.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}

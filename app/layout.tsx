import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CookieBanner } from "@/components/cookie-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hyper Swap - Professional Cleaning Services",
  description:
    "Professional cleaning services for offices, homes, apartments, and furniture. Post-renovation cleaning specialists.",
    generator: 'v0.dev'
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

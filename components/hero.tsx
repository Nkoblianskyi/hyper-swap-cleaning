"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Shield, Award, Zap } from "lucide-react"

export default function Hero() {
  const companyInfo = {
    name: "HyperLend",
    tagline: "Professional Cleaning Excellence",
    description:
      "Transform your space with our expert cleaning services. We combine cutting-edge techniques, eco-friendly products, and unmatched attention to detail to deliver exceptional results.",
  }

  const heroFeatures = [
    {
      icon: Shield,
      text: "Fully Insured",
    },
    {
      icon: Award,
      text: "Certified Team",
    },
    {
      icon: Zap,
      text: "Eco-Friendly",
    },
  ]

  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-secondary-400">{companyInfo.name}</span>
                <br />
                {companyInfo.tagline}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">{companyInfo.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/booking">
                <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-lg px-8 py-3">
                  Book Now
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary-900 text-lg px-8 py-3 bg-transparent"
              >
                <Link href="/services">Learn More</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              {heroFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="flex items-center space-x-2">
                    <IconComponent className="h-6 w-6 text-secondary-400" />
                    <span className="text-sm">{feature.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 transform rotate-3 shadow-2xl">
              <div className="bg-white rounded-xl p-6 transform -rotate-3">
                <Image
                  src="/hero.jpg"
                  alt="Professional cleaning service"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

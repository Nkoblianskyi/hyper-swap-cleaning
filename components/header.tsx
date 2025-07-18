"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, MapPin } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-900 text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Call us: 0151 428 7392</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@hyperswap.co.uk</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Liverpool Business District, L2 8JQ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-xl" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-sm"></div>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Hyper Swap
                </span>
                <div className="text-xs text-gray-500 font-medium">Professional Cleaning Services</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                About Us
              </Link>
              <div className="relative group">
                <Link href="/services" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                  Services
                </Link>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link
                      href="/services/office-cleaning"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                    >
                      Office Cleaning
                    </Link>
                    <Link
                      href="/services/post-renovation"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                    >
                      Post-Renovation
                    </Link>
                    <Link
                      href="/services/house-cleaning"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                    >
                      House Cleaning
                    </Link>
                    <Link
                      href="/services/apartment-cleaning"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                    >
                      Apartment Cleaning
                    </Link>
                    <Link
                      href="/services/furniture-cleaning"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                    >
                      Furniture Cleaning
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/methodology" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                Our Process
              </Link>
              <Link href="/testimonials" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                Reviews
              </Link>
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm font-semibold text-primary-600">Get Free Quote</div>
                <div className="text-xs text-gray-500">Call 0151 428 7392</div>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white shadow-lg"
              >
                <Link href="/booking">Book Now</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100 bg-white">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-primary-600 transition-colors font-medium px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-primary-600 transition-colors font-medium px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="text-gray-700 hover:text-primary-600 transition-colors font-medium px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/methodology"
                  className="text-gray-700 hover:text-primary-600 transition-colors font-medium px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Process
                </Link>
                <Link
                  href="/testimonials"
                  className="text-gray-700 hover:text-primary-600 transition-colors font-medium px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reviews
                </Link>
                <div className="pt-4 border-t border-gray-100">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700"
                  >
                    <Link href="/booking" onClick={() => setIsMenuOpen(false)}>
                      Book Now
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

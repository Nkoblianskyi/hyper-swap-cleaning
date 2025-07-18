import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-sm"></div>
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold">Hyper Swap</span>
                <div className="text-xs text-gray-400">Professional Cleaning</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your space with our professional cleaning services. We combine expertise, eco-friendly products,
              and exceptional customer service to deliver outstanding results.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/office-cleaning"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                  Office Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/post-renovation"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                  Post-Renovation Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/house-cleaning"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                  House Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/apartment-cleaning"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                  Apartment Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/furniture-cleaning"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                  Furniture Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary-400 mt-0.5" />
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-gray-300">0151 428 7392</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary-400 mt-0.5" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-gray-300">info@hyperswap.co.uk</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5" />
                <div>
                  <div className="font-medium">Address</div>
                  <div className="text-gray-300">15 Castle Street</div>
                  <div className="text-gray-300">Liverpool L2 0NE</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary-400 mt-0.5" />
                <div>
                  <div className="font-medium">Hours</div>
                  <div className="text-gray-300">Mon-Fri: 8AM-6PM</div>
                  <div className="text-gray-300">Sat: 9AM-4PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            
            
            <div className="space-y-3">
              
              
            </div>
            <div className="mt-6">
              <h4 className="font-medium mb-3">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/privacy-policy" className="block text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link href="/cookie-policy" className="block text-gray-300 hover:text-white transition-colors text-sm">
                  Cookie Policy
                </Link>
                <Link href="/about" className="block text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Hyper Swap Professional Cleaning Services. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="text-gray-400 text-sm">Licensed & Insured</div>
              <div className="text-gray-400 text-sm">•</div>
              <div className="text-gray-400 text-sm">Eco-Friendly Products</div>
              <div className="text-gray-400 text-sm">•</div>
              <div className="text-gray-400 text-sm">100% Satisfaction Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

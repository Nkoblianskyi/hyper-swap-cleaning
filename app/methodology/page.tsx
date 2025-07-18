import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cleaningMethodology } from "@/lib/mock-data"
import Image from "next/image"
import { CheckCircle, Clock } from "lucide-react"

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-primary-100 text-primary-700 border-primary-200">Our Process</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Proven Cleaning Methodology</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a systematic, proven approach to ensure consistent, high-quality results every time. Our
            methodology combines industry best practices with innovative techniques.
          </p>
        </div>
      </section>

      {/* Methodology Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {cleaningMethodology.map((step, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      {step.step}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{step.title}</h2>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{step.timeframe}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                  <p className="text-gray-700 mb-6">{step.detailedProcess}</p>

                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900">Tools & Equipment:</h3>
                    {step.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

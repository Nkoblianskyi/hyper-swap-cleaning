import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { advantages, cleaningMethodology, furnitureTips } from "@/lib/mock-data"
import Image from "next/image"
import { CheckCircle, Lightbulb, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Hyper Swap</h1>
              <p className="text-xl text-gray-600 mb-8">
                We're passionate about creating clean, healthy, and beautiful spaces. With years of experience and a
                commitment to excellence, we've become the trusted choice for professional cleaning services.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-600">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary-600">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/b8e9ed485148187a27c4fc9693c57cb4.jpg"
                alt="Hyper Swap cleaning team"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Advantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Advantages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart from other cleaning services and makes us the preferred choice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages &&
              advantages.map((advantage, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Cleaning Methodology */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Cleaning Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure consistent, high-quality results every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cleaningMethodology &&
              cleaningMethodology.map((step, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <div className="absolute top-4 right-4 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 pr-12">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Furniture Care Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Lightbulb className="h-16 w-16 text-secondary-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Furniture Care Tips</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice to help you maintain your furniture between professional cleanings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {furnitureTips &&
              furnitureTips.map((tip, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-secondary-500 mt-1 flex-shrink-0" />
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold">{tip.title}</h3>
                          <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                            {tip.category}
                          </span>
                        </div>
                        <p className="text-gray-600">{tip.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            To provide exceptional cleaning services that exceed our clients' expectations while maintaining the highest
            standards of professionalism, reliability, and environmental responsibility. We believe that a clean space
            contributes to better health, productivity, and overall well-being.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

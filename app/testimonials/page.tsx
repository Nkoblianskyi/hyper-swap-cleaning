import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { testimonials } from "@/lib/mock-data"
import { Star, Quote, CheckCircle } from "lucide-react"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-secondary-100 text-secondary-700 border-secondary-200">Client Reviews</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read authentic reviews from our satisfied clients who have experienced the Hyper Swap difference in
            professional cleaning services.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">4.9</div>
              <div className="text-gray-600">Average Rating</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary-600 mb-2">100%</div>
              <div className="text-gray-600">Would Recommend</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Quote className="h-6 w-6 text-primary-200 mr-2" />
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    {testimonial.verified && <CheckCircle className="h-4 w-4 text-secondary-500 ml-2" />}
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed italic">"{testimonial.comment}"</p>

                  <div className="border-t border-gray-100 pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                    <div className="text-xs text-primary-600 font-medium mt-1">{testimonial.service}</div>
                    <div className="text-xs text-gray-400 mt-1">{testimonial.date}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

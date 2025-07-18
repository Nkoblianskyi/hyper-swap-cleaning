import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { services } from "@/lib/mock-data"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, DollarSign } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Cleaning Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional cleaning solutions for every need. From offices to homes, we provide comprehensive cleaning
            services with attention to detail.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      <span>{service.price}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">What's included:</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-primary-600 font-medium">+{service.features.length - 3} more features</li>
                      )}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Button asChild className="flex-1 bg-primary-600 hover:bg-primary-700">
                      <Link href="/booking">
                        Book Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 bg-transparent">
                      <Link href={`/services/${service.id}`}>Learn More</Link>
                    </Button>
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

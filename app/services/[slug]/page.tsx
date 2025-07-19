import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { services } from "@/lib/mock-data"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, DollarSign, CheckCircle } from "lucide-react"
import { notFound } from "next/navigation"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.id === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{service.title}</h1>
              <p className="text-xl text-gray-600 mb-8">{service.subtitle || service.description || ""}</p>

              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-lg">
                  <Clock className="h-5 w-5 text-secondary-600" />
                  <span className="font-semibold">{service.duration}</span>
                </div>
              </div>

              <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700">
                <Link href="/booking">
                  Book This Service <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What's Included</h2>
              <div className="space-y-4">
                {(service.features || []).map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary-50 to-secondary-50 border-0">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Book your {service.title.toLowerCase()} service today and experience the HyperLend difference. Our
                  professional team is ready to transform your space.
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-primary-600 hover:bg-primary-700">
                    <Link href="/booking">
                      Book Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/services">View All Services</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

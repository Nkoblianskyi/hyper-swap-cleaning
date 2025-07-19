import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { services, advantages, testimonials } from "@/lib/mock-data"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star, Shield, Clock, Award, Users, Zap, CheckCircle, Quote, Phone } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50"></div>
        <div className="absolute inset-0 opacity-5"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-float lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="/hero.jpg"
                  alt="Professional cleaning team at work"
                  width={500}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            <div className="animate-slide-up lg:order-2">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Transform Your Space with
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent block">
                  Expert Cleaning
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience the difference of professional cleaning services that combine cutting-edge techniques,
                eco-friendly products, and unmatched attention to detail. From offices to homes, we create environments
                that inspire and impress.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-lg px-8 py-4 shadow-xl"
                >
                  <Link href="/booking">
                    Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 border-2 hover:bg-primary-50 bg-transparent"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                  <div className="text-gray-600 font-medium">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-600 mb-2">5+</div>
                  <div className="text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                  <div className="text-gray-600 font-medium">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="flex items-center justify-center space-x-3 text-gray-600">
              <Shield className="h-8 w-8 text-primary-600" />
              <div>
                <div className="font-semibold">Fully Insured</div>
                <div className="text-sm">& Bonded</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-600">
              <Award className="h-8 w-8 text-secondary-600" />
              <div>
                <div className="font-semibold">Certified</div>
                <div className="text-sm">Professionals</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-600">
              <Users className="h-8 w-8 text-primary-600" />
              <div>
                <div className="font-semibold">Trusted by</div>
                <div className="text-sm">500+ Clients</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-600">
              <Zap className="h-8 w-8 text-secondary-600" />
              <div>
                <div className="font-semibold">Eco-Friendly</div>
                <div className="text-sm">Products</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-primary-100 text-primary-700 border-primary-200">About HyperLend</Badge>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Redefining Cleaning Standards with
                <span className="text-primary-600">Professional Excellence</span>
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Founded on the principle that every space deserves exceptional care, HyperLend has grown from a local
                cleaning service to a trusted partner for businesses and families throughout the metropolitan area. Our
                commitment to quality, sustainability, and customer satisfaction drives everything we do.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                    <p className="text-gray-600 text-sm">
                      Rigorous quality control processes ensure consistent, exceptional results every time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center">
                    <Shield className="h-6 w-6 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Safety First</h3>
                    <p className="text-gray-600 text-sm">
                      Comprehensive insurance and safety protocols protect you and your property.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Expert Team</h3>
                    <p className="text-gray-600 text-sm">
                      Trained, certified professionals who treat your space with respect and care.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center">
                    <Zap className="h-6 w-6 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Eco-Conscious</h3>
                    <p className="text-gray-600 text-sm">
                      Environmentally responsible products and practices for a healthier planet.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700"
              >
                <Link href="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Image
                    src="/673552b045357a87928b354cff74c5e2.jpg"
                    alt="Professional team training"
                    width={250}
                    height={300}
                    className="rounded-2xl shadow-lg"
                  />
                  <Image
                    src="/60c9f04b4ed509ba4e84c4ba97d3b8f7.jpg"
                    alt="Quality control process"
                    width={250}
                    height={200}
                    className="rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <Image
                    src="/25c804a748f27cc9c9817b92da2a78e2.jpg"
                    alt="Eco-friendly products"
                    width={250}
                    height={200}
                    className="rounded-2xl shadow-lg"
                  />
                  <Image
                    src="/2d8abb842bdb6259cd19771415217c1d.jpg"
                    alt="Professional equipment"
                    width={250}
                    height={300}
                    className="rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-secondary-100 text-secondary-700 border-secondary-200">
              Our Professional Services
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Comprehensive Cleaning Solutions for
              <span className="text-secondary-600">Every Need</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              From corporate offices to family homes, we provide specialized cleaning services tailored to your unique
              requirements. Our expert team uses advanced techniques and eco-friendly products to deliver exceptional
              results that exceed expectations.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-secondary-600 to-primary-600 hover:from-secondary-700 hover:to-primary-700 shadow-xl"
            >
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <Card
                key={service.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-900 border-0">{service.price}</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/90 text-sm">{service.subtitle}</p>
                  </div>
                </div>

                <CardContent className="p-8 flex flex-col flex-grow">
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-3 mb-6 flex-grow">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-primary-600 font-medium text-sm">
                        +{service.features.length - 3} more features included
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">5.0</span>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <Button
                      asChild
                      className="flex-1 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700"
                    >
                      <Link href="/booking">Book Now</Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 border-2 hover:bg-primary-50 bg-transparent">
                      <Link href={`/services/${service.id}`}>Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary-100 text-primary-700 border-primary-200">Why Choose HyperLend</Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              The Advantages That Set Us
              <span className="text-primary-600">Apart</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We don't just clean – we transform spaces with our unique combination of expertise, innovation, and
              unwavering commitment to excellence. Discover what makes us the preferred choice for discerning clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="group p-8 hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <div className="relative h-48 mb-6 rounded-2xl overflow-hidden">
                    <Image
                      src={advantage.image || "/placeholder.svg"}
                      alt={advantage.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{advantage.description}</p>

                  <div className="space-y-2">
                    {advantage.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-primary-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-secondary-100 text-secondary-700 border-secondary-200">Client Testimonials</Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              What Our Clients Say About
              <span className="text-secondary-600">Our Service</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience with
              HyperLend's professional cleaning services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-shadow duration-300 border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <Quote className="h-8 w-8 text-primary-200 mr-3" />
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.comment}"</p>

                  <div className="border-t border-gray-100 pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                    <div className="text-xs text-primary-600 font-medium mt-1">{testimonial.service}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-2 hover:bg-secondary-50 bg-transparent">
              <Link href="/testimonials">
                Read More Reviews <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-900 via-primary-800 to-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-8 bg-white/20 text-white border-white/30">Ready to Transform Your Space?</Badge>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Experience the HyperLend
            <span className="block text-secondary-300">Difference Today</span>
          </h2>

          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of satisfied clients who trust HyperLend for their cleaning needs. Get your free,
            no-obligation quote today and discover why we're the preferred choice for professional cleaning services.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary-900 hover:bg-gray-100 text-lg px-8 py-4 shadow-xl"
            >
              <Link href="/booking">
                Get Free Quote Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 bg-transparent"
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us Today</h3>
              <p className="text-white/80">0151 428 7392</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quick Response</h3>
              <p className="text-white/80">24-hour quote turnaround</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Satisfaction Guaranteed</h3>
              <p className="text-white/80">100% money-back promise</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

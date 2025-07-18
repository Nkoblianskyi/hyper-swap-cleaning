"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookingSuccessPopup } from "@/components/booking-success-popup"
import { services } from "@/lib/mock-data"
import { Calendar, Clock, MapPin, Phone, Mail, User, CheckCircle } from "lucide-react"

export default function BookingPage() {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    address: "",
    date: "",
    time: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setShowSuccessPopup(true)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      address: "",
      date: "",
      time: "",
      message: "",
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Book Your Cleaning Service</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fill out the form below and we'll contact you within 24 hours to confirm your appointment and discuss your
            specific cleaning needs.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Booking Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <Label htmlFor="service">Service Type *</Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.id} value={service.id}>
                                {service.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address" className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Service Address *
                      </Label>
                      <Input
                        id="address"
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        placeholder="Enter the address where service is needed"
                      />
                    </div>

                    {/* Scheduling */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date" className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Preferred Date *
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => handleInputChange("date", e.target.value)}
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>
                      <div>
                        <Label htmlFor="time" className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          Preferred Time *
                        </Label>
                        <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (8:00 AM - 12:00 PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12:00 PM - 5:00 PM)</SelectItem>
                            <SelectItem value="evening">Evening (5:00 PM - 8:00 PM)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Additional Notes</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Any specific requirements or additional information..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-lg py-3">
                      Submit Booking Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Booking Info */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-primary-50 to-secondary-50 border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">What Happens Next?</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        1
                      </div>
                      <p>We'll review your booking request</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        2
                      </div>
                      <p>Our team will call you within 24 hours</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        3
                      </div>
                      <p>We'll confirm details and schedule your service</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        4
                      </div>
                      <p>You'll receive a confirmation email</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Have questions about our services or need immediate assistance? We're here to help!
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary-600" />
                      Call us: 0151 428 7392
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary-600" />
                      Email: info@hyperswap.co.uk
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">Professional Team</div>
                        <div className="text-xs text-gray-600">Trained and certified experts</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">Eco-Friendly Products</div>
                        <div className="text-xs text-gray-600">Safe for family and pets</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">100% Satisfaction</div>
                        <div className="text-xs text-gray-600">Guaranteed quality service</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">Fully Insured</div>
                        <div className="text-xs text-gray-600">Complete protection coverage</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <BookingSuccessPopup isOpen={showSuccessPopup} onClose={() => setShowSuccessPopup(false)} />

      <Footer />
    </div>
  )
}

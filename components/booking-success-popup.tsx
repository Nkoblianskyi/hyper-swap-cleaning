"use client"

import { CheckCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface BookingSuccessPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function BookingSuccessPopup({ isOpen, onClose }: BookingSuccessPopupProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-white">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-8 w-8 text-secondary-500" />
              <h2 className="text-xl font-semibold text-gray-900">Booking Successful!</h2>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">
              Thank you for choosing Hyper Swap! Your booking request has been submitted successfully.
            </p>
            <p className="text-gray-600">
              We will contact you within 24 hours to confirm your appointment and discuss any specific requirements.
            </p>
            <div className="bg-secondary-50 p-4 rounded-lg">
              <p className="text-sm text-secondary-800 font-medium">What happens next?</p>
              <ul className="text-sm text-secondary-700 mt-2 space-y-1">
                <li>• We'll call you to confirm details</li>
                <li>• Schedule a convenient time</li>
                <li>• Send you a confirmation email</li>
              </ul>
            </div>
            <Button onClick={onClose} className="w-full bg-primary-600 hover:bg-primary-700">
              Close
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

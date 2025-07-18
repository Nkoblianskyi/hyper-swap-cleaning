import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServiceNotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The service you're looking for doesn't exist or has been moved.</p>
          <Button asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

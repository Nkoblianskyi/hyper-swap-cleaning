import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

          <Card>
            <CardContent className="p-8 prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <h2>Information We Collect</h2>
              <p>When you use our services or visit our website, we may collect the following types of information:</p>
              <ul>
                <li>Personal information you provide (name, email, phone number, address)</li>
                <li>Service preferences and booking details</li>
                <li>Website usage information through cookies and analytics</li>
                <li>Communication records for customer service purposes</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul>
                <li>Provide and improve our cleaning services</li>
                <li>Schedule and confirm appointments</li>
                <li>Communicate with you about our services</li>
                <li>Process payments and maintain records</li>
                <li>Analyze website usage to improve user experience</li>
              </ul>

              <h2>Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties, except in the
                following circumstances:
              </p>
              <ul>
                <li>With your explicit consent</li>
                <li>To trusted service providers who assist in our operations</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no method of transmission over the internet is
                100% secure.
              </p>

              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>File a complaint with relevant authorities</li>
              </ul>

              <h2>Cookies</h2>
              <p>
                Our website uses cookies to enhance your browsing experience. You can control cookie settings through
                your browser preferences. For more details, please see our Cookie Policy.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the
                new policy on this page and updating the "Last updated" date.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us through our website's contact
                form or booking system.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}

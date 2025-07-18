import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>

          <Card>
            <CardContent className="p-8 prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <h2>What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit our
                website. They help us provide you with a better experience by remembering your preferences and
                understanding how you use our site.
              </p>

              <h2>Types of Cookies We Use</h2>

              <h3>Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly. They enable basic functions like page
                navigation, form submissions, and access to secure areas of the website.
              </p>

              <h3>Analytics Cookies</h3>
              <p>
                We use analytics cookies to understand how visitors interact with our website. This helps us improve our
                services and user experience. These cookies collect information anonymously.
              </p>

              <h3>Functional Cookies</h3>
              <p>
                These cookies enable enhanced functionality and personalization, such as remembering your preferences
                and providing customized content.
              </p>

              <h2>Managing Cookies</h2>
              <p>You can control and manage cookies in several ways:</p>
              <ul>
                <li>Through your browser settings - most browsers allow you to block or delete cookies</li>
                <li>Using our cookie banner when you first visit our site</li>
                <li>By adjusting your preferences at any time</li>
              </ul>

              <h2>Third-Party Cookies</h2>
              <p>
                Some cookies on our site are set by third-party services that appear on our pages. We have no control
                over these cookies, and you should check the relevant third party's website for more information.
              </p>

              <h2>Cookie Retention</h2>
              <p>Different cookies have different lifespans:</p>
              <ul>
                <li>
                  <strong>Session cookies:</strong> Deleted when you close your browser
                </li>
                <li>
                  <strong>Persistent cookies:</strong> Remain on your device for a set period or until manually deleted
                </li>
              </ul>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this cookie policy from time to time to reflect changes in technology, legislation, or our
                business practices. Please check this page regularly for updates.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us through our website's contact
                form.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}

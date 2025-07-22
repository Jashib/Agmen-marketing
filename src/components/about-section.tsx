import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Your web marketing, qualified, optimized, efficient</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <Image
                      src="/images/team-collaboration.avif"
                      alt="Team collaboration dashboard"
                      width={2070}
                      height={80}
                      className="w-full h-24 object-cover rounded"
                    />
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <Image
                      src="/images/work-team.avif"
                      alt="Analytics and reporting"
                      width={2015}
                      height={80}
                      className="w-full h-24 object-cover rounded"
                    />
                  </div>
                </div>
                <div className="bg-blue-500 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-sm">Close Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Your client pipeline, qualified, closed, delivered.
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">We Don not Just Market — We Close.</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At Agmen Marketing, we are more than a marketing provider, we are your partner in scaling your insurance
                  agency with pre-closed clients, not just leads.
                </p>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                With deep expertise in digital strategy, lead qualification, and high-converting sales systems, we help
                forward-thinking insurance agencies grow faster, smoother, and smarter. Our mission? To deliver a
                transparent, ROI-driven system that actually works — because when you win, we win.
              </p>
            </div>

            {/* <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-full">
              Learn More About Us →
            </Button> */}
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-20 bg-stone-50 rounded-3xl p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Philosophy: Flexibility, Built on Trust</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We understand that no one wants to be locked into something that does not deliver. That is why you can
              choose to work with us with or without a contract. Whether you prefer structure or flexibility, our focus
              stays the same: delivering real results, real clients, and a system that proves its value on its own.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/jay-agmen-marketing/30min" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-full">
                Start Without Contract →
              </Button>
              </a>
              {/* <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-full bg-transparent"
              >
                View Contract Options
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

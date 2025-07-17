import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 lg:p-20 text-center text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full translate-y-24 -translate-x-24"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Do you have a local or international business? An idea?
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Looking to grow your insurance agency with qualified, ready-to-sign clients? No matter your size or
              specialty, we have the solution for you.
            </p>

            <div className="space-y-6">
              <a href="https://calendly.com/jay-agmen-marketing/30min" target="_blank" rel="noopener noreferrer" >
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-lg font-semibold rounded-full mb-5">
                  Book your free discovery call today! →
                </Button>
              </a>

              <div className="bg-green-500/20 border border-green-400/30 rounded-2xl p-6 backdrop-blur-sm max-w-2xl mx-auto">
                <h4 className="text-xl font-bold mb-2">🎯 Our 90-Day Growth Guarantee</h4>
                <p className="text-green-100">
                  If we don&apos;t deliver at least 3 qualified, ready-to-sign clients in your first 90 days, we&apos;ll work for
                  free until we do. That&apos;s how confident we are in our system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

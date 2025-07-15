export default function ServicesSection() {
  const portfolioItems = [
    {
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      title: "Insurance Lead Generation",
      description: "Targeted campaigns for qualified prospects",
    },
    {
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      title: "Sales Process Optimization",
      description: "Streamlined closing procedures",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2187&q=80",
      title: "Client Relationship Management",
      description: "CRM integration and management",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      title: "Performance Analytics",
      description: "Weekly reporting and insights",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      title: "Multi-Channel Marketing",
      description: "Comprehensive digital strategy",
    },
    {
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      title: "Licensed Agent Support",
      description: "Professional sales assistance",
    },
  ];

  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Some recent creations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We create a custom system designed around the insurance services you offer, turning leads into
            pre-qualified, closed clients ready for your agency.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Our Services */}
        <div className="bg-white rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Process</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Lead Capture & Qualification</h4>
              <p className="text-gray-600 leading-relaxed">
                Targeted campaigns deliver leads into a shared CRM where our licensed agents personally call, qualify,
                and nurture each prospect.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Custom Offers & Closing</h4>
              <p className="text-gray-600 leading-relaxed">
                You create personalized offers based on each prospect&apos;s needs. Our agents then book appointments and
                help close the sale before handing the client over to you.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Transparent Weekly Reporting</h4>
              <p className="text-gray-600 leading-relaxed">
                To build trust and keep you informed, we send a detailed letter to your office every week outlining the
                new clients we&apos;ve delivered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

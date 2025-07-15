import { Check, X } from "lucide-react"

export default function ComparisonSection() {
  const comparisonData = [
    {
      feature: "Cost",
      agmen: "Tailor-made packages with flexible contracts",
      inHouse: "Fixed salaries, benefits, HR costs",
      others: "Often high or unpredictable fees",
    },
    {
      feature: "Expertise",
      agmen: "Multi-channel marketing + licensed sales agents",
      inHouse: "Usually limited marketing skills",
      others: "Usually focused on one platform",
    },
    {
      feature: "Lead Management",
      agmen: "Qualified, closed leads handed over ready to onboard",
      inHouse: "Leads often unqualified, time-consuming",
      others: "Leads sent without qualification",
    },
    {
      feature: "Optimization",
      agmen: "Weekly campaign & sales performance updates",
      inHouse: "Limited time or training for updates",
      others: "Sometimes charged extra",
    },
    {
      feature: "Language & Communication",
      agmen: "Multilingual native agents for diverse markets",
      inHouse: "Depends on team makeup",
      others: "Varies, often limited",
    },
    {
      feature: "360° Integrated Strategy",
      agmen: "Marketing + sales fully integrated",
      inHouse: "Departments often siloed",
      others: "Usually compartmentalized",
    },
    {
      feature: "Speed & Agility",
      agmen: "Fast, responsive, and proactive",
      inHouse: "Slower due to internal processes",
      others: "Varies with agency workload",
    },
    {
      feature: "Innovation Access",
      agmen: "AI, A/B testing, latest trends built-in",
      inHouse: "Training and tools often limited",
      others: "Depends on agency priorities",
    },
    {
      feature: "Contract Flexibility",
      agmen: "No-contract or flexible packages",
      inHouse: "Full-time employee commitment",
      others: "Usually require long-term contracts",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Here's why so many companies choose Agmen Marketing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare our comprehensive solution with traditional approaches
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-bold text-gray-900">Feature</th>
                  <th className="text-left py-4 px-6 font-bold text-orange-500">Agmen Marketing</th>
                  <th className="text-left py-4 px-6 font-bold text-gray-700">In-House Teams</th>
                  <th className="text-left py-4 px-6 font-bold text-gray-700">Other Agencies</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-gray-900">{row.feature}</td>
                    <td className="py-4 px-6 text-gray-700">
                      <div className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{row.agmen}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      <div className="flex items-start">
                        <X className="w-5 h-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{row.inHouse}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      <div className="flex items-start">
                        <X className="w-5 h-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-stone-50 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">No Long-Term Contracts</h3>
            <p className="text-gray-600">Flexible packages that adapt to your needs. Prove our value month by month.</p>
          </div>

          <div className="bg-stone-50 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Licensed Sales Agents</h3>
            <p className="text-gray-600">
              Our team includes licensed insurance professionals who understand your business.
            </p>
          </div>

          <div className="bg-stone-50 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Pre-Closed Clients</h3>
            <p className="text-gray-600">
              We don't just send leads - we deliver clients ready to sign with your agency.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

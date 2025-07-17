"use client"

import type React from "react"
import Image from "next/image"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight } from "lucide-react"

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="bg-stone-50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                We Don&apos;t Just Send Leads - We Deliver <span className="text-orange-500">Ready-to-Sign</span> Insurance
                Clients
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Tired of chasing cold leads? Our licensed agents qualify and close prospects for you - so you get
                clients, not just contacts. It&apos;s the last marketing system your insurance agency will ever need.
              </p>

              <div className="space-y-4">
                <p className="text-lg font-semibold text-gray-900">
                  <span className="text-orange-500">Our goal:</span> To be the last marketing agency you&apos;ll ever need to
                  hire. Ever.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full">
                Case studies <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Google Rating */}
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-blue-600">Google</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-lg font-semibold">4.8</span>
              </div>
            </div>
          </div>

          {/* Right Column - Lead Capture Form */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-md mx-auto">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get a free ROI analysis</h3>
                <p className="text-gray-600">See how we can 3x your insurance sales in 90 days</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="businessEmail" className="block text-sm font-medium text-gray-700 mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    id="businessEmail"
                    name="businessEmail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="your@company.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="agencyName" className="block text-sm font-medium text-gray-700 mb-1">
                    Agency Name *
                  </label>
                  <input
                    type="text"
                    id="agencyName"
                    name="agencyName"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Your Insurance Agency"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="monthlyLeads" className="block text-sm font-medium text-gray-700 mb-1">
                    Current Monthly Lead Volume
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors">
                    <option value="">Select range</option>
                    <option value="0-50">0-50 leads</option>
                    <option value="51-100">51-100 leads</option>
                    <option value="101-250">101-250 leads</option>
                    <option value="250+">250+ leads</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Get My Free ROI Analysis →
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500 mb-3">
                  By submitting this form, you agree to our{" "}
                  <a href="#" className="text-orange-500 hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-orange-500 hover:underline">
                    Terms of Service
                  </a>
                </p>

                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>No spam. Unsubscribe anytime.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with gradient */}
      </div>
    </section>
  )
}

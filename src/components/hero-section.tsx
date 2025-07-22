"use client"

import type React from "react"
import { Star, ArrowRight, Play, Zap, Target, TrendingUp } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="bg-stone-50 py-20 lg:py-32 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 order-1 lg:order-1">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                We Do not Just Send Leads - We Deliver{" "}
                <span className="text-blue-500 relative">
                  Ready-to-Sign
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transform scale-x-0 animate-[scaleX_2s_ease-in-out_0.5s_forwards] origin-left"></div>
                </span>{" "}
                Insurance Clients
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                Tired of chasing cold leads? Our licensed agents qualify and close prospects for you - so you get
                clients, not just contacts. It is the last marketing system your insurance agency will ever need.
              </p>

              <div className="space-y-4">
                <p className="text-base md:text-lg font-semibold text-gray-900">
                  <span className="text-blue-500">Our goal:</span> To be the last marketing agency you will ever need to
                  hire. Ever.
                </p>
              </div>
            </div>

            {/* CTA Button and Google Rating in same row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              <a 
                href="https://calendly.com/jay-agmen-marketing/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <button className="group relative bg-blue-500 hover:bg-white text-white hover:text-blue-500 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 border-blue-500 hover:border-blue-500 overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Grow your business with us
                    <div className="ml-3 w-6 h-6 bg-white group-hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-blue-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </span>
                </button>
              </a>

              {/* Google Rating */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <span className="text-xl md:text-2xl font-bold text-blue-600">Google</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current animate-[bounce_1s_ease-in-out_infinite] delay-[var(--delay)]"
                        style={{ "--delay": `${i * 0.1}s` } as React.CSSProperties}
                      />
                    ))}
                  </div>
                  <span className="text-base md:text-lg font-semibold">4.8</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Modern UI Design with floating illustration */}
          <div className="relative order-2 lg:order-2">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mx-auto">
              {/* Background subtle gradients */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-3xl opacity-70"></div>
              
              {/* Main illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/images/rocket-illustration.png"
                  alt="Digital marketing growth illustration"
                  className="w-4/5 h-4/5 object-contain z-20 animate-[float_4s_ease-in-out_infinite]"
                />
              </div>
              
              {/* Floating UI elements */}
              <div className="absolute top-8 right-12 z-30">
                <div className="bg-white shadow-lg rounded-lg p-3 animate-[float_3s_ease-in-out_infinite]">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-700">95% Close Rate</p>
                      <p className="text-[10px] text-gray-500">This month</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-12 left-8 z-30">
                <div className="bg-white shadow-lg rounded-lg p-3 animate-[float_4s_ease-in-out_infinite_1s]">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-700">500+ Clients</p>
                      <p className="text-[10px] text-gray-500">Delivered</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 right-4 z-30 transform -translate-y-1/2">
                <div className="bg-white shadow-lg rounded-lg p-3 animate-[float_3.5s_ease-in-out_infinite_0.5s]">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-700">$50M+ Revenue</p>
                      <p className="text-[10px] text-gray-500">Generated</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-1000"></div>
              <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-700"></div>
              
              {/* Colored shapes in background */}
              <div className="absolute top-12 left-12 w-12 h-12 bg-blue-100 rounded-lg transform rotate-12 opacity-50"></div>
              <div className="absolute bottom-12 right-12 w-16 h-16 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-blue-100 rounded-lg transform -rotate-12 opacity-40"></div>
            </div>
          </div>
        </div>

        {/* Bottom section with gradient and company logos - COMMENTED OUT FOR NOW */}
        {/* 
        <div className="mt-16 md:mt-20">
          <div className="bg-gradient-to-r from-blue-100 via-blue-100 to-blue-100 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">3000+ companies</h3>
                <p className="text-base md:text-lg text-gray-700 mb-6">trust us with their growth</p>
                <div className="flex items-center space-x-4 md:space-x-6">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-500">$50M+</div>
                    <div className="text-xs md:text-sm text-gray-600">Revenue Generated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-500">500+</div>
                    <div className="text-xs md:text-sm text-gray-600">Clients Delivered</div>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-base md:text-lg text-gray-700 mb-4">Trusted by leading companies</p>
                <div className="flex justify-center md:justify-end items-center space-x-4 md:space-x-6 opacity-60">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                    alt="Microsoft"
                    className="h-6 md:h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                    alt="Google"
                    className="h-6 md:h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                    alt="Amazon"
                    className="h-4 md:h-6 w-auto grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  )
}

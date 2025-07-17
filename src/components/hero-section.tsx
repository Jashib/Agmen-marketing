"use client"

import type React from "react"
import { Star, ArrowRight, Play, Zap, Target, TrendingUp } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="bg-stone-50 py-20 lg:py-32 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 order-1 lg:order-1">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                We Don't Just Send Leads - We Deliver{" "}
                <span className="text-orange-500 relative">
                  Ready-to-Sign
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transform scale-x-0 animate-[scaleX_2s_ease-in-out_0.5s_forwards] origin-left"></div>
                </span>{" "}
                Insurance Clients
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                Tired of chasing cold leads? Our licensed agents qualify and close prospects for you - so you get
                clients, not just contacts. It's the last marketing system your insurance agency will ever need.
              </p>

              <div className="space-y-4">
                <p className="text-base md:text-lg font-semibold text-gray-900">
                  <span className="text-orange-500">Our goal:</span> To be the last marketing agency you'll ever need to
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
                  <button className="group relative bg-orange-500 hover:bg-white text-white hover:text-orange-500 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 border-orange-500 hover:border-orange-500 overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      Grow your business with us
                      <div className="ml-3 w-6 h-6 bg-white group-hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300">
                        <ArrowRight className="w-4 h-4 text-orange-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5" />
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

            {/* Secondary CTA */}
            {/* <div className="pt-4">
              <button className="group flex items-center text-gray-600 hover:text-orange-500 transition-colors duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center mr-3 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Play className="w-4 h-4 md:w-5 md:h-5 text-orange-500 ml-0.5" />
                </div>
                <span className="font-medium text-sm md:text-base">Watch how it works</span>
              </button>
            </div> */}
          </div>

          {/* Right Column - Enhanced Bigger Tilted Design */}
          <div className="relative order-2 lg:order-2">
            <div className="relative w-full max-w-none mx-auto transform rotate-3 hover:rotate-1 transition-transform duration-700">
              {/* Main container with tilt - Made Much Bigger */}
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mx-auto">
                {/* Background gradient card - Bigger */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-white to-blue-50 rounded-3xl shadow-2xl transform -rotate-3"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-white/80 to-orange-50/80 rounded-3xl shadow-xl transform rotate-1"></div>

                {/* Floating dashboard elements - Bigger and More Visible */}
                <div className="absolute top-4 md:top-8 left-4 md:left-8 bg-white rounded-2xl p-3 md:p-6 shadow-xl animate-float transform -rotate-2 hover:scale-105 transition-all duration-300 border border-green-100">
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center shadow-lg">
                      <TrendingUp className="w-5 h-5 md:w-7 md:h-7 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm md:text-lg font-bold text-gray-900 animate-[fadeInUp_1s_ease-out_0.5s_both]">
                        95% Close Rate
                      </div>
                      <div className="text-xs md:text-sm text-gray-600 animate-[fadeInUp_1s_ease-out_0.7s_both]">
                        This month
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-16 md:top-24 right-4 md:right-8 bg-white rounded-2xl p-3 md:p-6 shadow-xl animate-float-delay-1 transform rotate-1 hover:scale-105 transition-all duration-300 border border-blue-100">
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-lg">
                      <Target className="w-5 h-5 md:w-7 md:h-7 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm md:text-lg font-bold text-gray-900 animate-[fadeInUp_1s_ease-out_1s_both]">
                        500+ Clients
                      </div>
                      <div className="text-xs md:text-sm text-gray-600 animate-[fadeInUp_1s_ease-out_1.2s_both]">
                        Delivered
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-16 md:bottom-24 left-4 md:left-12 bg-white rounded-2xl p-3 md:p-6 shadow-xl animate-float-delay-2 transform -rotate-1 hover:scale-105 transition-all duration-300 border border-orange-100">
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center shadow-lg">
                      <Zap className="w-5 h-5 md:w-7 md:h-7 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-sm md:text-lg font-bold text-gray-900 animate-[fadeInUp_1s_ease-out_1.5s_both]">
                        $50M+ Revenue
                      </div>
                      <div className="text-xs md:text-sm text-gray-600 animate-[fadeInUp_1s_ease-out_1.7s_both]">
                        Generated
                      </div>
                    </div>
                  </div>
                </div>

                {/* Central professional image with enhanced styling - Much Bigger */}
                <div className="absolute inset-12 md:inset-20 lg:inset-24 rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
                  <div className="relative w-full h-full">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                      alt="Professional team member"
                      className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-700"
                    />
                    {/* Enhanced overlay with company info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:p-6">
                      <div className="text-white animate-[slideUp_1s_ease-out_2s_both]">
                        <div className="text-sm md:text-lg font-bold mb-1">Licensed Agent</div>
                        <div className="text-xs md:text-sm opacity-90">Ready to close your deals</div>
                        <div className="flex items-center mt-2 space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-xs md:text-sm">Available Now</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animated social media icons with better positioning - Bigger */}
                <div className="absolute -top-2 md:-top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-xl flex items-center justify-center animate-float border-4 border-blue-100 hover:scale-110 transition-all duration-300">
                  <div className="w-6 h-6 md:w-9 md:h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-2 md:-right-4 transform -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-xl flex items-center justify-center animate-float-delay-1 border-4 border-pink-100 hover:scale-110 transition-all duration-300">
                  <div className="w-6 h-6 md:w-9 md:h-9 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                    </svg>
                  </div>
                </div>

                <div className="absolute -bottom-2 md:-bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-xl flex items-center justify-center animate-float-delay-2 border-4 border-red-100 hover:scale-110 transition-all duration-300">
                  <div className="w-6 h-6 md:w-9 md:h-9 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                </div>

                <div className="absolute top-1/2 -left-2 md:-left-4 transform -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-xl flex items-center justify-center animate-float-delay-3 border-4 border-green-100 hover:scale-110 transition-all duration-300">
                  <div className="w-6 h-6 md:w-9 md:h-9 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                </div>

                {/* Enhanced floating particles - More and Bigger */}
                <div className="absolute top-8 md:top-16 right-8 md:right-16 w-2 h-2 md:w-4 md:h-4 bg-orange-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-12 md:bottom-20 left-12 md:left-20 w-1.5 h-1.5 md:w-3 md:h-3 bg-blue-400 rounded-full animate-ping delay-500"></div>
                <div className="absolute top-20 md:top-32 left-6 md:left-12 w-1 h-1 md:w-2.5 md:h-2.5 bg-green-400 rounded-full animate-ping delay-1000"></div>
                <div className="absolute bottom-20 md:bottom-32 right-6 md:right-12 w-2 h-2 md:w-3.5 md:h-3.5 bg-purple-400 rounded-full animate-ping delay-1500"></div>
                <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 md:w-3 md:h-3 bg-pink-400 rounded-full animate-ping delay-2000"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with gradient and company logos */}
        <div className="mt-16 md:mt-20">
          {/* <div className="bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">3000+ companies</h3>
                <p className="text-base md:text-lg text-gray-700 mb-6">trust us with their growth</p>
                <div className="flex items-center space-x-4 md:space-x-6">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-orange-500">$50M+</div>
                    <div className="text-xs md:text-sm text-gray-600">Revenue Generated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-orange-500">500+</div>
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
          </div> */}
        </div>
      </div>
    </section>
  )
}

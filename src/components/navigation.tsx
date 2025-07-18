"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image 
              src="/images/agmen-logo.png"
              alt="Agmen Marketing Logo"
              width={40}
              height={40}
              className="w-auto h-8"
            />
            <span className="text-2xl font-bold text-gray-900">
              Agmen Marketing<span className="text-blue-500">.</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Process
            </a>
            <a href="#comparison" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Comparison
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Case Studies
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              About
            </a>
            <a href="https://calendly.com/jay-agmen-marketing/30min" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium">
                Schedule a call →
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-700 font-medium">
                Process
              </a>
              <a href="#comparison" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Comparison
              </a>
              <a href="#testimonials" className="text-gray-700 font-medium">
                Case Studies
              </a>
              <a href="#about" className="text-gray-700 font-medium">
                About
              </a>
              <a href="https://calendly.com/jay-agmen-marketing/30min" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium w-fit">
                  Schedule a call →
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

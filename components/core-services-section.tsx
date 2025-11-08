"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function CoreServicesSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black mb-8 sm:mb-12 md:mb-16">
          Core Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {[
            { title: "Flexible EV Leasing", icon: "🚗" },
            { title: "Dispatch & Delivery", icon: "📦" },
            { title: "EV Manpower", icon: "👥" },
            { title: "Infrastructure Sharing", icon: "🔌" },
          ].map((service, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-36 sm:h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                {service.title === "Dispatch & Delivery" ? (
                  <Image
                    src="/pack.jpg"
                    alt={service.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                ) : service.title === "EV Manpower" ? (
                  <Image
                    src="/manpower.jpg"
                    alt={service.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-4xl sm:text-6xl">{service.icon}</span>
                )}
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-black text-base sm:text-lg">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mb-16">
          <button className="w-12 h-12 rounded-lg bg-amber-700 flex items-center justify-center hover:bg-amber-600 transition">
            <ChevronLeft size={24} className="text-white" />
          </button>
          <button className="w-12 h-12 rounded-lg bg-amber-700 flex items-center justify-center hover:bg-amber-600 transition">
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>

        {/* Partners Section */}
        <div className="text-center space-y-4 sm:space-y-6">
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black px-4">
            Vision to Build and Strength to Grow
          </h3>
        </div>
      </div>
    </section>
  )
}

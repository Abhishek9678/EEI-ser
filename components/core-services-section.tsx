"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function CoreServicesSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-center text-black mb-16">Core Services</h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: "Flexible EV Leasing", icon: "🚗" },
            { title: "Dispatch & Delivery", icon: "📦" },
            { title: "EV Manpower", icon: "👥" },
            { title: "Infrastructure Sharing", icon: "🔌" },
          ].map((service, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
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
                  <span className="text-6xl">{service.icon}</span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-black text-lg">{service.title}</h3>
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
        <div className="text-center space-y-6">
          <p className="text-sm text-gray-600">✦ Partners ✦</p>
          <h3 className="text-4xl font-bold text-black">Trusted By Brands Across India</h3>
        </div>
      </div>
    </section>
  )
}

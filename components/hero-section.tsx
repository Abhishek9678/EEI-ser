"use client"

import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-r from-amber-900/40 to-amber-800/40 pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/eu.jpg" alt="EV charging background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Features List */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start border-b border-lime-400/30 pb-6">
                <div className="text-lime-400 text-2xl">🚗</div>
                <div>
                  <h3 className="text-white font-semibold">Flexible EV subleasing for 2W & 3W</h3>
                </div>
              </div>
              <div className="flex gap-4 items-start border-b border-lime-400/30 pb-6">
                <div className="text-lime-400 text-2xl">⚡</div>
                <div>
                  <h3 className="text-white font-semibold">Trained, verified EV riders and operators</h3>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-lime-400 text-2xl">☀️</div>
                <div>
                  <h3 className="text-white font-semibold">Charging & parking infrastructure on subscription</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Drive The Future
              <br />
              Cleaner, Smarter, Electric
            </h1>
            <p className="text-lg text-white/90">
              Eei Services powers scalable EV fleets, last-mile delivery and infrastructure sharing for Indian
              businesses.
            </p>
            <button className="bg-amber-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-600 transition flex items-center gap-2 w-fit">
              Get A Free Demo
              <span>↗</span>
            </button>
            <p className="text-sm text-white/70">
              Trusted by logistics partners, delivery leaders and B2B brands across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-r from-amber-900/40 to-amber-800/40 pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/evn.jpg" alt="EV charging background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 w-full h-full flex items-center">
        <div className="w-full flex justify-end px-8 md:px-16 lg:px-20">
          {/* Right-aligned Content */}
          <div className="max-w-2xl space-y-8 text-right">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Drive The Future
              <br />
              Cleaner, Smarter And Electric
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Eei Services powers scalable EV fleets, last-mile delivery and infrastructure sharing for Indian
              businesses.
            </p>
            
            {/* Features List */}
            <div className="space-y-4 inline-block text-left">
              <div className="flex gap-3 items-center bg-black/30 backdrop-blur-sm rounded-lg px-4 py-3">
                <div className="text-amber-400 text-2xl">🛵</div>
                <h3 className="text-white font-semibold text-base">Flexible EV subleasing for 2W & 3W</h3>
              </div>
              <div className="flex gap-3 items-center bg-black/30 backdrop-blur-sm rounded-lg px-4 py-3">
                <div className="text-yellow-400 text-2xl">⚡</div>
                <h3 className="text-white font-semibold text-base">Trained, verified EV riders and operators</h3>
              </div>
               <div className="flex gap-3 items-center bg-black/30 backdrop-blur-sm rounded-lg px-4 py-3">
                <div className="text-yellow-400 text-2xl">☀️</div>
                <h3 className="text-white font-semibold text-base">Charging & parking infrastructure on subscription</h3>
              </div>
            </div>

            <p className="text-base text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Trusted by logistics partners, delivery leaders and B2B brands across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

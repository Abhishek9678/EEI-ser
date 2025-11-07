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
        <div className="w-full flex justify-center md:justify-end px-4 sm:px-6 md:px-12 lg:px-20">
          {/* Content - Centered on mobile, right-aligned on desktop */}
          <div className="max-w-2xl space-y-4 sm:space-y-6 md:space-y-8 text-center md:text-right">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Drive The Future
              <br />
              Cleaner, Smarter And Electric
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] px-2 sm:px-0">
              Eei Services powers scalable EV fleets, last-mile delivery and infrastructure sharing for Indian
              businesses.
            </p>
            
            {/* Features List */}
            <div className="space-y-3 sm:space-y-4 inline-block text-left w-full sm:w-auto">
              <div className="flex gap-2 sm:gap-3 items-center bg-black/30 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 sm:py-3">
                <div className="text-amber-400 text-xl sm:text-2xl flex-shrink-0">🛵</div>
                <h3 className="text-white font-semibold text-sm sm:text-base">Flexible EV subleasing for 2W & 3W</h3>
              </div>
              <div className="flex gap-2 sm:gap-3 items-center bg-black/30 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 sm:py-3">
                <div className="text-yellow-400 text-xl sm:text-2xl flex-shrink-0">⚡</div>
                <h3 className="text-white font-semibold text-sm sm:text-base">Trained, verified EV riders and operators</h3>
              </div>
              <div className="flex gap-2 sm:gap-3 items-center bg-black/30 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 sm:py-3">
                <div className="text-yellow-400 text-xl sm:text-2xl flex-shrink-0">☀️</div>
                <h3 className="text-white font-semibold text-sm sm:text-base">Charging & parking infrastructure on subscription</h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] px-2 sm:px-0">
              Trusted by logistics partners, delivery leaders and B2B brands across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

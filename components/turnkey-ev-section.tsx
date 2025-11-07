"use client"

import Image from "next/image"
import { Play } from "lucide-react"

export default function TurnkeyEVSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
                Turnkey EV Operations — Ready to Deploy.
              </h2>
            </div>
            <p className="text-base sm:text-lg text-gray-700">
              EEI Services offers end-to-end EV fleet solutions including leasing, real-time tracking, and trained manpower — everything your business needs to go electric with ease.
            </p>

            {/* Features */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="flex gap-3 sm:gap-4 items-start">
                <div className="text-xl sm:text-2xl flex-shrink-0">✅</div>
                <div>
                  <h3 className="font-semibold text-black text-sm sm:text-base">Fleet leasing & maintenance (2W & 3W)</h3>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4 items-start">
                <div className="text-xl sm:text-2xl flex-shrink-0">⚡</div>
                <div>
                  <h3 className="font-semibold text-black text-sm sm:text-base">Smart dispatch & live tracking via LIUM GO</h3>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4 items-start">
                <div className="text-xl sm:text-2xl flex-shrink-0">👨‍🏫</div>
                <div>
                  <h3 className="font-semibold text-black text-sm sm:text-base">Verified riders & performance analytics</h3>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4 items-start">
                <div className="text-xl sm:text-2xl flex-shrink-0">☀️</div>
                <div>
                  <h3 className="font-semibold text-black text-sm sm:text-base">Charging & parking on subscription</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image and Card */}
          <div className="relative space-y-6">
            {/* Vehicle Image and Info Card */}
            <div className="relative">
              <Image
                src="/white-electric-vehicle-with-person.jpg"
                alt="EV vehicle"
                width={500}
                height={400}
                className="w-full rounded-lg"
              />
              <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-white rounded-lg p-3 sm:p-4 md:p-6 shadow-lg max-w-[200px] sm:max-w-xs">
                <h3 className="font-bold text-black text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                  Inside India's EV Operations Hub
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm mb-2 sm:mb-4">
                  See how LIUM GO powers real-time dispatch, maintenance, and fleet intelligence.
                </p>
                <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-lime-400 flex items-center justify-center hover:bg-lime-300 transition">
                  <Play size={20} className="text-black sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

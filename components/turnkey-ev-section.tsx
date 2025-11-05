"use client"

import Image from "next/image"
import { Play } from "lucide-react"

export default function TurnkeyEVSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold text-black">Turnkey EV Operations — Ready to Deploy.</h2>
            </div>
            <p className="text-lg text-gray-700">
              EEI Services offers end-to-end EV fleet solutions including leasing, real-time tracking, and trained manpower — everything your business needs to go electric with ease.
            </p>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="text-2xl">✅</div>
                <div>
                  <h3 className="font-semibold text-black">Fleet leasing & maintenance (2W & 3W)</h3>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-2xl">⚡</div>
                <div>
                  <h3 className="font-semibold text-black">Smart dispatch & live tracking via LIUM GO</h3>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-2xl">👨‍🏫</div>
                <div>
                  <h3 className="font-semibold text-black">Verified riders & performance analytics</h3>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-2xl">☀️</div>
                <div>
                  <h3 className="font-semibold text-black">Charging & parking on subscription</h3>
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
              <div className="absolute bottom-4 right-4 bg-white rounded-lg p-6 shadow-lg max-w-xs">
                <h3 className="font-bold text-black text-lg mb-2">Inside India's EV Operations Hub</h3>
                <p className="text-gray-700 text-sm mb-4">
                  See how LIUM GO powers real-time dispatch, maintenance, and fleet intelligence.
                </p>
                <button className="w-12 h-12 rounded-full bg-lime-400 flex items-center justify-center hover:bg-lime-300 transition">
                  <Play size={24} className="text-black" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

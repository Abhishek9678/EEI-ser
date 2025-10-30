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
              <p className="text-sm text-gray-600 mb-2">✦ Ready To Deploy ✦</p>
              <h2 className="text-5xl font-bold text-black">Turnkey EV Operations</h2>
            </div>
            <p className="text-lg text-gray-700">
              From vehicle onboarding to real-time dispatch, we handle the heavy lifting.
            </p>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="text-2xl">📦</div>
                <div>
                  <h3 className="font-semibold text-black">Fleet leasing & maintenance packages (2W & 3W)</h3>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-2xl">📍</div>
                <div>
                  <h3 className="font-semibold text-black">Smart dispatch & live tracking via LIUM GO</h3>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-2xl">🏢</div>
                <div>
                  <h3 className="font-semibold text-black">Rider training, verification & performance analytics</h3>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-2xl">🔄</div>
                <div>
                  <h3 className="font-semibold text-black">Fleet leasing & maintenance packages (2W & 3W)</h3>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-2xl">🔌</div>
                <div>
                  <h3 className="font-semibold text-black">Flexible subscription for chargers & parking</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image and Card */}
          <div className="relative space-y-6">
            {/* Dashboard Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg p-8 text-white">
              <div className="grid grid-cols-5 gap-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                    🚗
                  </div>
                  <span className="text-xs">Maintenance</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                    🔋
                  </div>
                  <span className="text-xs">Battery</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">❤️</div>
                  <span className="text-xs">Safety Health</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                    📊
                  </div>
                  <span className="text-xs">Predictive Analytics</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">⏱️</div>
                  <span className="text-xs">Live Tracking</span>
                </div>
              </div>
            </div>

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

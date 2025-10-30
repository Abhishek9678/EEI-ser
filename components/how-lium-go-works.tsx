"use client"

import Image from "next/image"

export default function HowLiumGoWorks() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro Text */}
        <div className="mb-16 space-y-4">
          <p className="text-lg text-gray-700">
            LIUM GO from EEI Services connects <span className="inline-block">🚗</span> vehicles, manpower and charging{" "}
            <span className="inline-block">⚡</span> so you can run profitable operations. Scale fast, operate smart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Vehicle Image */}
          <div>
            <Image
              src="/eu2.jpg"
              alt="LIUM GO vehicle"
              width={400}
              height={500}
              className="w-full rounded-lg"
            />
          </div>

          {/* Right - How It Works */}
          <div className="space-y-8">
            <div>
              <p className="text-sm text-gray-600 mb-2">✦ Turnkey EV Operations — Ready To Deploy ✦</p>
              <h2 className="text-4xl font-bold text-black">How EEI Services Works</h2>
            </div>

            {/* Features with Checkmarks */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-lime-400 text-2xl flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-bold text-black text-lg">Lease or Franchise</h3>
                  <p className="text-gray-700">Choose flexible EV subleasing or launch a LIUM GO hub.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-lime-400 text-2xl flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-bold text-black text-lg">Operate & Dispatch</h3>
                  <p className="text-gray-700">Trained riders, smart routing, real-time tracking.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-lime-400 text-2xl flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-bold text-black text-lg">Scale & Earn</h3>
                  <p className="text-gray-700">Expand service area, optimize returns, monitor impact.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-amber-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-600 transition flex items-center gap-2 w-fit">
              See Pricing & Plans
              <span>↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

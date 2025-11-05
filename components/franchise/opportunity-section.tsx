"use client"

import Image from "next/image"

export default function FranchiseOpportunitySection() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            <Image
              src="/euler-1.jpg"
              alt="EV franchise opportunity"
              width={600}
              height={500}
              className="w-full rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-600 rounded-2xl p-6 shadow-xl max-w-xs">
              <p className="text-white font-bold text-lg mb-2">Growing Market</p>
              <p className="text-white/90 text-sm">
                India's EV market is projected to reach $15 billion by 2027, with a 49% CAGR.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm text-amber-600 font-semibold mb-2">✦ Why Choose EEI ✦</p>
              <h2 className="text-5xl font-bold text-black mb-4">The Opportunity</h2>
              <p className="text-lg text-gray-700">
                Partner with India's fastest-growing EV infrastructure and services network. 
                We provide everything you need to build a successful business in the booming electric vehicle sector.
              </p>
            </div>

            {/* Opportunity Features */}
            <div className="space-y-4">
              <div className="flex gap-4 items-start bg-white p-4 rounded-xl shadow-sm">
                <div className="text-3xl">🚀</div>
                <div>
                  <h3 className="font-bold text-black text-lg">Proven Business Model</h3>
                  <p className="text-gray-600">Tested and refined across 500+ locations nationwide</p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-white p-4 rounded-xl shadow-sm">
                <div className="text-3xl">💼</div>
                <div>
                  <h3 className="font-bold text-black text-lg">Comprehensive Support</h3>
                  <p className="text-gray-600">From setup to operations, we're with you every step</p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-white p-4 rounded-xl shadow-sm">
                <div className="text-3xl">📈</div>
                <div>
                  <h3 className="font-bold text-black text-lg">Multiple Revenue Streams</h3>
                  <p className="text-gray-600">Charging, fleet management, maintenance, and more</p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-white p-4 rounded-xl shadow-sm">
                <div className="text-3xl">🌱</div>
                <div>
                  <h3 className="font-bold text-black text-lg">Sustainable Future</h3>
                  <p className="text-gray-600">Build wealth while creating environmental impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


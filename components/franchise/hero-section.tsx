"use client"

import Image from "next/image"

export default function FranchiseHeroSection() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-r from-amber-900/40 to-amber-800/40 pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/eu2.jpg" alt="Franchise opportunity background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block bg-amber-600/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-6 py-2">
              <p className="text-amber-300 font-semibold">✦ Partnership Opportunity ✦</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Own Your Future
              <br />
              <span className="text-amber-400">Join EEI Franchise</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Be part of India's electric vehicle revolution. Build a profitable business while contributing to a 
              sustainable future with our proven franchise model.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-500 transition flex items-center gap-2">
                Apply Now
                <span>↗</span>
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition">
                Download Brochure
              </button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 space-y-2">
              <p className="text-5xl font-bold text-amber-400">500+</p>
              <p className="text-white/90">Active Franchises</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 space-y-2">
              <p className="text-5xl font-bold text-lime-400">₹2Cr+</p>
              <p className="text-white/90">Average Annual Revenue</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 space-y-2">
              <p className="text-5xl font-bold text-blue-400">95%</p>
              <p className="text-white/90">Partner Satisfaction</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 space-y-2">
              <p className="text-5xl font-bold text-green-400">6-12</p>
              <p className="text-white/90">Months ROI Period</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


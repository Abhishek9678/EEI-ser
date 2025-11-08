"use client"

import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="w-full bg-white pt-28 pb-12 md:pt-32 md:pb-16 lg:pt-36 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-start">
          
          {/* Left Column - Text Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Drive The Future
              <br />
              Cleaner, Smarter And Electric
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              EEI Services powers scalable EV fleets, last-mile delivery and infrastructure sharing for Indian businesses.
            </p>
            
            {/* Features List */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex gap-3 items-start">
                <div className="text-lime-500 text-xl sm:text-2xl flex-shrink-0">✓</div>
                <h3 className="text-gray-800 font-semibold text-sm sm:text-base">Flexible EV subleasing for 2W & 3W</h3>
              </div>
              <div className="flex gap-3 items-start">
                <div className="text-lime-500 text-xl sm:text-2xl flex-shrink-0">✓</div>
                <h3 className="text-gray-800 font-semibold text-sm sm:text-base">Trained, verified EV riders and operators</h3>
              </div>
              <div className="flex gap-3 items-start">
                <div className="text-lime-500 text-xl sm:text-2xl flex-shrink-0">✓</div>
                <h3 className="text-gray-800 font-semibold text-sm sm:text-base">Charging & parking infrastructure on subscription</h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-gray-600">
              Trusted by logistics partners, delivery leaders and B2B brands across India.
            </p>

            {/* Partners Section */}
            <div className="pt-2">
              {/* Heading Card */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-3 sm:p-4 mb-4">
                <h3 className="text-center text-base sm:text-lg font-bold text-gray-900">Our Partners</h3>
              </div>
              
              {/* Logos Row - Horizontal on Large Screens */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                <div className="flex flex-col items-center justify-center p-3 sm:p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition">
                  <div className="h-10 flex items-center justify-center mb-2">
                    <Image
                      src="/amazon.png"
                      alt="Amazon"
                      width={80}
                      height={40}
                      className="object-contain max-h-8"
                    />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-700">Amazon</p>
                </div>
                <div className="flex flex-col items-center justify-center p-3 sm:p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition">
                  <div className="h-10 flex items-center justify-center mb-2">
                    <Image
                      src="/bigbasket.png"
                      alt="BigBasket"
                      width={80}
                      height={40}
                      className="object-contain max-h-8"
                    />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-700">BigBasket</p>
                </div>
                <div className="flex flex-col items-center justify-center p-3 sm:p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition">
                  <div className="h-10 flex items-center justify-center mb-2">
                    <Image
                      src="/portor.png"
                      alt="Porter"
                      width={80}
                      height={40}
                      className="object-contain max-h-8"
                    />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-700">Porter</p>
                </div>
                <div className="flex flex-col items-center justify-center p-3 sm:p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition">
                  <div className="h-10 flex items-center justify-center mb-2">
                    <Image
                      src="/shawdowfax.png"
                      alt="Shadowfax"
                      width={80}
                      height={40}
                      className="object-contain max-h-8"
                    />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-700">Shadowfax</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image and CTA Buttons */}
          <div className="space-y-6 order-1 lg:order-2 -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-16">
            {/* Main Image */}
            <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[520px] xl:h-[550px]">
              <Image
                src="/heroev.jpg"
                alt="EV vehicle with driver and charging station"
                fill
                className="object-contain"
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={95}
                priority
              />
            </div>

            {/* CTA Buttons Below Image */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-end lg:pr-8 xl:pr-12">
              <button className="px-6 sm:px-8 py-3 sm:py-3.5 bg-[#1A364D] text-white font-semibold rounded-lg hover:bg-[#0f1f2e] transition-colors shadow-md text-sm sm:text-base">
                Book a Demo
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-3.5 bg-[#4CAF50] text-white font-semibold rounded-lg hover:bg-[#45a049] transition-colors shadow-md text-sm sm:text-base">
                Explore Our Model
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

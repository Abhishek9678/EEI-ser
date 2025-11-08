"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, X } from "lucide-react"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"

export default function TurnkeyEVSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Content Above Image */}
        <div className="max-w-4xl mx-auto space-y-5 sm:space-y-6 md:space-y-8 mb-8 sm:mb-10 md:mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight text-center">
              Turnkey EV Operations — Ready to Deploy.
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center leading-relaxed">
            EEI Services offers end-to-end EV fleet solutions including leasing, real-time tracking, and trained manpower — everything your business needs to go electric with ease.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 pt-4">
            <div className="flex gap-3 sm:gap-4 items-start bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="text-xl sm:text-2xl flex-shrink-0">✅</div>
              <div>
                <h3 className="font-semibold text-black text-sm sm:text-base">Fleet leasing & maintenance (2W & 3W)</h3>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4 items-start bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="text-xl sm:text-2xl flex-shrink-0">⚡</div>
              <div>
                <h3 className="font-semibold text-black text-sm sm:text-base">Smart dispatch & live tracking via LIUM GO</h3>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4 items-start bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="text-xl sm:text-2xl flex-shrink-0">👨‍🏫</div>
              <div>
                <h3 className="font-semibold text-black text-sm sm:text-base">Verified riders & performance analytics</h3>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4 items-start bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="text-xl sm:text-2xl flex-shrink-0">☀️</div>
              <div>
                <h3 className="font-semibold text-black text-sm sm:text-base">Charging & parking on subscription</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section Below Text */}
        <div className="relative w-full">
          {/* Vehicle Image and Info Card */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg">
            <Image
              src="/evn.jpg"
              alt="EV vehicle"
              fill
              className="object-cover object-center"
              sizes="100vw"
              quality={90}
            />
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 bg-white/95 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 shadow-xl w-[50%] sm:w-[45%] md:w-[35%] lg:w-[30%] max-w-[350px]">
              <h3 className="font-bold text-black text-xs sm:text-sm md:text-base lg:text-lg mb-1 sm:mb-2 leading-tight">
                Inside India's EV Operations Hub
              </h3>
              <p className="text-gray-700 text-[10px] sm:text-xs md:text-sm mb-2 sm:mb-3 md:mb-4 leading-snug">
                See how LIUM GO powers real-time dispatch, maintenance, and fleet intelligence.
              </p>
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-lime-400 flex items-center justify-center hover:bg-lime-300 active:scale-95 transition-all shadow-md" 
                aria-label="Play video"
              >
                <Play size={16} className="text-black sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 bg-black border-0">
          <DialogClose className="absolute right-2 top-2 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <div className="relative w-full aspect-video">
            <video
              className="w-full h-full"
              controls
              autoPlay
              preload="metadata"
              poster="https://res.cloudinary.com/dvbx2tqcg/video/upload/v1762595659/VIDEO-2024-09-28-12-11-04_glgsuo.jpg"
            >
              <source
                src="https://res.cloudinary.com/dvbx2tqcg/video/upload/v1762595659/VIDEO-2024-09-28-12-11-04_glgsuo.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

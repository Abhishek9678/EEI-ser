"use client"

import Image from "next/image"
import { Pause } from "lucide-react"

export default function VideoSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-lg overflow-hidden h-96 md:h-[500px]">
          <Image src="/wind-turbines-renewable-energy.jpg" alt="Wind turbines" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <button className="w-20 h-20 rounded-full bg-amber-700 flex items-center justify-center hover:bg-amber-600 transition shadow-lg">
              <Pause size={40} className="text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

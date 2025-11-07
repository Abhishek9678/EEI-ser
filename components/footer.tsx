"use client"

import { Facebook, Twitter, Youtube, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-gray-950 border-t border-gray-800 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
          All Right Reserved © 2025 EEI
        </p>
        <div className="flex gap-3 sm:gap-4">
          <a
            href="#"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center hover:bg-lime-400 transition"
          >
            <Facebook size={18} className="text-black sm:w-5 sm:h-5" />
          </a>
          <a
            href="#"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center hover:bg-lime-400 transition"
          >
            <Twitter size={18} className="text-black sm:w-5 sm:h-5" />
          </a>
          <a
            href="#"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center hover:bg-lime-400 transition"
          >
            <Youtube size={18} className="text-black sm:w-5 sm:h-5" />
          </a>
          <a
            href="#"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center hover:bg-lime-400 transition"
          >
            <Instagram size={18} className="text-black sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

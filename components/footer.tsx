"use client"

import { Facebook, Twitter, Youtube, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-gray-950 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <p className="text-gray-400 text-sm">All Right Reserved © 2025 EEI</p>
        <div className="flex gap-4">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-lime-400 transition"
          >
            <Facebook size={20} className="text-black" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-lime-400 transition"
          >
            <Twitter size={20} className="text-black" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-lime-400 transition"
          >
            <Youtube size={20} className="text-black" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-lime-400 transition"
          >
            <Instagram size={20} className="text-black" />
          </a>
        </div>
      </div>
    </footer>
  )
}

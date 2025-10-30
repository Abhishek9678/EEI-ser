"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-2xl">EEI</div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-white hover:text-amber-400 transition flex items-center gap-1">
            Home <ChevronDown size={16} />
          </Link>
          <Link href="#" className="text-white hover:text-amber-400 transition flex items-center gap-1">
            Franchise <ChevronDown size={16} />
          </Link>
          <Link href="#" className="text-white hover:text-amber-400 transition flex items-center gap-1">
            Investors <ChevronDown size={16} />
          </Link>
          <Link href="#" className="text-white hover:text-amber-400 transition flex items-center gap-1">
            Services <ChevronDown size={16} />
          </Link>
          <Link href="#" className="text-white hover:text-amber-400 transition flex items-center gap-1">
            News <ChevronDown size={16} />
          </Link>
          <Link href="#" className="text-white hover:text-amber-400 transition flex items-center gap-1">
            About <ChevronDown size={16} />
          </Link>
        </nav>

        {/* CTA Button */}
        <button className="bg-amber-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-600 transition flex items-center gap-2">
          Get A Free Demo
          <span>↗</span>
        </button>
      </div>
    </header>
  )
}

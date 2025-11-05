"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-2xl hover:text-amber-400 transition">
          EEI
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white hover:text-amber-400 transition">
            Home
          </Link>
          <Link href="/franchise" className="text-white hover:text-amber-400 transition">
            Franchise
          </Link>
          <Link href="#" className="text-white hover:text-amber-400 transition">
            Investors
          </Link>
          <Link href="#" className="text-white hover:text-amber-400 transition">
            Services
          </Link>
          <Link href="#" className="text-white hover:text-amber-400 transition">
            News
          </Link>
          <Link href="#" className="text-white hover:text-amber-400 transition">
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}

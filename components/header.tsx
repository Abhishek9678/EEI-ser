"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-[#003366]/95 backdrop-blur z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative h-10 w-24 sm:h-12 sm:w-32 hover:opacity-80 transition">
          <Image
            src="/EEIRe.jpg"
            alt="EEI Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          <Link href="/" className="text-white hover:text-amber-400 transition text-sm lg:text-base">
            Home
          </Link>
          <Link href="/franchise" className="text-white hover:text-amber-400 transition text-sm lg:text-base">
            Franchise
          </Link>
          <Link href="#" className="text-white hover:text-amber-400 transition text-sm lg:text-base">
            Investors
          </Link>
          <Link href="#" className="text-white hover:text-amber-400 transition text-sm lg:text-base">
            Services
          </Link>
          <Link href="#" className="text-white hover:text-amber-400 transition text-sm lg:text-base">
            News
          </Link>
          <Link href="#" className="text-white hover:text-amber-400 transition text-sm lg:text-base">
            About
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 hover:text-amber-400 transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#003366]/98 backdrop-blur border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            <Link 
              href="/" 
              className="text-white hover:text-amber-400 transition py-2 border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/franchise" 
              className="text-white hover:text-amber-400 transition py-2 border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Franchise
            </Link>
            <Link 
              href="#" 
              className="text-white hover:text-amber-400 transition py-2 border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Investors
            </Link>
            <Link 
              href="#" 
              className="text-white hover:text-amber-400 transition py-2 border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#" 
              className="text-white hover:text-amber-400 transition py-2 border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              News
            </Link>
            <Link 
              href="#" 
              className="text-white hover:text-amber-400 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

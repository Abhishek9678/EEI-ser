"use client"

import { Phone, HelpCircle, Mail } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="w-full bg-gradient-to-r from-gray-900 to-gray-800 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left - Contact Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 space-y-4 sm:space-y-6">
            <div>
              <p className="text-xs sm:text-sm text-gray-600 mb-2">✦ Contact Us ✦</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">Get In Touch</h2>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-lime-400"
              />
              <input
                type="email"
                placeholder="Your E-mail"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-lime-400"
              />
              <input
                type="tel"
                placeholder="Your Number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-lime-400"
              />
              <textarea
                placeholder="Additional Details"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-lime-400"
              ></textarea>
            </form>

            <button className="bg-amber-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-600 transition flex items-center gap-2 w-fit">
              Discover
              <span>↗</span>
            </button>

            <p className="text-sm text-gray-600">
              Send us your message, and we'll get back to you within 2-4 business hours.
            </p>
          </div>

          {/* Right - Contact Info */}
          <div className="space-y-12">
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Talk To Us</h3>
                  <p className="text-gray-300">(+000) 12345 6789</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0">
                  <HelpCircle size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Help Centre</h3>
                  <p className="text-gray-300">support@example.com</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Write To Us</h3>
                  <p className="text-gray-300">info@example.com</p>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="border-t border-gray-700 pt-6 sm:pt-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div>
                  <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Information</h4>
                  <ul className="space-y-2 text-gray-300 text-xs sm:text-sm">
                    <li>
                      <a href="#" className="hover:text-amber-400 transition">
                        Our Locations
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-amber-400 transition">
                        Affiliate Program
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-amber-400 transition">
                        Calculator
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-amber-400 transition">
                        Global Operations
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-amber-400 transition">
                        Chat Support
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Support</h4>
                  <ul className="space-y-2 text-gray-300 text-xs sm:text-sm">
                    <li>
                      <a href="#" className="hover:text-amber-400 transition">
                        Solutions
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-amber-400 transition">
                        What We Do
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-amber-400 transition">
                        Request a Freight
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-amber-400 transition">
                        Track & Trace
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-amber-400 transition">
                        Brokerage Terms
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
                  <ul className="space-y-2 text-gray-300 text-xs sm:text-sm">
                    <li>
                      <a href="#" className="hover:text-amber-400 transition">
                        Solar Installation
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-amber-400 transition">
                        Consulting Services
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-amber-400 transition">
                        Energy Audits
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-amber-400 transition">
                        Case Studies
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-amber-400 transition">
                        Video Tutorials
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

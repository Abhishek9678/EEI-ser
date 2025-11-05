"use client"

import { useState } from "react"

export default function FranchiseContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    investment: "",
    experience: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your interest! We'll contact you within 24 hours.")
  }

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Left Content */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <p className="text-sm text-amber-600 font-semibold mb-2">✦ Get Started ✦</p>
              <h2 className="text-5xl font-bold text-black mb-4">Apply Now</h2>
              <p className="text-lg text-gray-700">
                Take the first step towards building your EV business empire. Fill out the form and our 
                franchise team will reach out to you within 24 hours.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h4 className="font-bold text-black">Call Us</h4>
                  <p className="text-gray-600">+91 1800-123-4567</p>
                  <p className="text-sm text-gray-500">Mon-Sat, 9AM-6PM</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h4 className="font-bold text-black">Email Us</h4>
                  <p className="text-gray-600">franchise@eei.com</p>
                  <p className="text-sm text-gray-500">We reply within 24 hours</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h4 className="font-bold text-black">Visit Us</h4>
                  <p className="text-gray-600">EEI Headquarters, Mumbai</p>
                  <p className="text-sm text-gray-500">Schedule an appointment</p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-amber-50 rounded-xl p-6 space-y-3">
              <h4 className="font-bold text-black">Why Partners Choose Us</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p>✓ 500+ successful franchise partners</p>
                <p>✓ 95% partner satisfaction rate</p>
                <p>✓ Comprehensive 2-week training program</p>
                <p>✓ 24/7 dedicated support team</p>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                    placeholder="City name"
                  />
                </div>

                <div>
                  <label htmlFor="investment" className="block text-sm font-semibold text-gray-700 mb-2">
                    Investment Capacity *
                  </label>
                  <select
                    id="investment"
                    name="investment"
                    required
                    value={formData.investment}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                  >
                    <option value="">Select range</option>
                    <option value="50-70">₹50-70 Lakhs</option>
                    <option value="70-90">₹70-90 Lakhs</option>
                    <option value="90-120">₹90 Lakhs - ₹1.2 Crore</option>
                    <option value="120+">₹1.2 Crore+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                    Business Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                  >
                    <option value="">Select experience</option>
                    <option value="none">No business experience</option>
                    <option value="0-3">0-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tell Us About Yourself
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Share your background, motivation, and any questions..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to receive information about EEI franchise opportunities and understand that my information 
                  will be processed according to the Privacy Policy. *
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition flex items-center justify-center gap-2"
              >
                Submit Application
                <span>→</span>
              </button>

              <p className="text-center text-sm text-gray-500">
                By submitting, you'll receive a detailed franchise brochure and our team will contact you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}


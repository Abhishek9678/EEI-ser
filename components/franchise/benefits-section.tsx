"use client"

export default function FranchiseBenefitsSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-amber-600 font-semibold mb-2">✦ Partner Benefits ✦</p>
          <h2 className="text-5xl font-bold text-black mb-4">What You Get As A Partner</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We invest in your success with comprehensive support, training, and resources
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 space-y-4 hover:shadow-lg transition">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-3xl">
              🎓
            </div>
            <h3 className="text-2xl font-bold text-black">Complete Training Program</h3>
            <p className="text-gray-700">
              Comprehensive onboarding covering operations, technology, customer service, and business management
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>2-week intensive training</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>Ongoing education programs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>Dedicated success manager</span>
              </li>
            </ul>
          </div>

          {/* Benefit 2 */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 space-y-4 hover:shadow-lg transition">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-3xl">
              🛠️
            </div>
            <h3 className="text-2xl font-bold text-black">Technology & Infrastructure</h3>
            <p className="text-gray-700">
              Access to our proprietary LIUM GO platform and complete infrastructure setup assistance
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-amber-600">✓</span>
                <span>Advanced fleet management software</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600">✓</span>
                <span>Charging station setup support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600">✓</span>
                <span>24/7 technical support</span>
              </li>
            </ul>
          </div>

          {/* Benefit 3 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 space-y-4 hover:shadow-lg transition">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-3xl">
              📢
            </div>
            <h3 className="text-2xl font-bold text-black">Marketing & Brand Support</h3>
            <p className="text-gray-700">
              Leverage our established brand and comprehensive marketing resources
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>National brand recognition</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Marketing collateral & campaigns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Social media support</span>
              </li>
            </ul>
          </div>

          {/* Benefit 4 */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 space-y-4 hover:shadow-lg transition">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-3xl">
              🤝
            </div>
            <h3 className="text-2xl font-bold text-black">Supply Chain Management</h3>
            <p className="text-gray-700">
              Benefit from our established vendor relationships and bulk purchasing power
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-purple-600">✓</span>
                <span>Preferential vehicle pricing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">✓</span>
                <span>Parts & maintenance discounts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">✓</span>
                <span>Quality assurance standards</span>
              </li>
            </ul>
          </div>

          {/* Benefit 5 */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 space-y-4 hover:shadow-lg transition">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-3xl">
              💰
            </div>
            <h3 className="text-2xl font-bold text-black">Financial Assistance</h3>
            <p className="text-gray-700">
              Get support in securing funding and managing your finances effectively
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-red-600">✓</span>
                <span>Bank loan facilitation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✓</span>
                <span>Government subsidy guidance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✓</span>
                <span>Financial planning tools</span>
              </li>
            </ul>
          </div>

          {/* Benefit 6 */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 space-y-4 hover:shadow-lg transition">
            <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-3xl">
              🌐
            </div>
            <h3 className="text-2xl font-bold text-black">Network & Community</h3>
            <p className="text-gray-700">
              Join a thriving community of successful franchise partners across India
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-teal-600">✓</span>
                <span>Partner forums & events</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600">✓</span>
                <span>Best practice sharing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600">✓</span>
                <span>Regional support groups</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}


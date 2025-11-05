"use client"

export default function FranchiseRequirementsSection() {
  return (
    <section className="w-full bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-amber-400 font-semibold mb-2">✦ Investment Details ✦</p>
          <h2 className="text-5xl font-bold text-white mb-4">Franchise Requirements</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Understanding the investment and qualifications needed to become an EEI franchise partner
          </p>
        </div>

        {/* Requirements */}
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-6">Key Requirements</h3>
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Location & Space</h4>
                    <p className="text-gray-300">
                      Minimum 3000-5000 sq ft space in strategic location with parking facility
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Business Experience</h4>
                    <p className="text-gray-300">
                      Prior business or management experience preferred (not mandatory)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Financial Capability</h4>
                    <p className="text-gray-300">
                      Net worth of ₹1 Crore+ and liquid capital of ₹30-40 Lakhs
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Passion & Commitment</h4>
                    <p className="text-gray-300">
                      Dedication to sustainable mobility and active business involvement
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Local Network</h4>
                    <p className="text-gray-300">
                      Understanding of local market and good community connections
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-lime-500/10 border border-lime-500/20 rounded-2xl p-6">
              <h4 className="text-lime-400 font-bold text-xl mb-4">⏱️ Timeline to Launch</h4>
              <div className="space-y-3 text-white">
                <div className="flex justify-between">
                  <span>Application to Approval</span>
                  <span className="font-semibold">2-3 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Setup & Training</span>
                  <span className="font-semibold">6-8 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Grand Opening</span>
                  <span className="font-semibold text-lime-400">8-12 weeks total</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}


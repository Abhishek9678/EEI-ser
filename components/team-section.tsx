"use client"

import Image from "next/image"
import { Mail, Briefcase, Award } from "lucide-react"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Sakshi Vats",
      position: "CEO",
      image: "https://res.cloudinary.com/dvbx2tqcg/image/upload/v1763377158/Sakshi_Ma_am_mpo77x.jpg",
      email: "sakshi@eeiservices.in",
      bio: "Leading EEI Services with strategic vision and innovation in EV solutions",
      expertise: "Strategic Leadership, Business Development, EV Ecosystem"
    },
    
    {
      name: "Shubham Gupta",
      position: "COO",
      image: "https://res.cloudinary.com/dvbx2tqcg/image/upload/v1763377165/Subham_sir_zmxhdh.jpg",
      email: "shubham@eeiservices.in",
      bio: "Driving operational excellence and scaling EV fleet operations across India",
      expertise: "Operations Management, Fleet Optimization, Supply Chain"
    },
    {
        name: "Kartik",
        position: "Charging & Infra Lead",
        image: "https://res.cloudinary.com/dvbx2tqcg/image/upload/v1763377160/Kartik_sir_rvpeso.jpg",
        email: "Kartik@eeiservices.in",
        bio: "Building robust charging infrastructure and managing EV charging networks",
        expertise: "Charging Infrastructure, Network Management, Energy Solutions"
      },
    {
      name: "Akash Raghav",
      position: "Director",
      image: "https://res.cloudinary.com/dvbx2tqcg/image/upload/v1763377202/Akash_sir_1_dwkdgf.jpg",
      email: "akash@eeiservices.in",
      bio: "Overseeing strategic initiatives and partnerships in the EV sector",
      expertise: "Strategic Planning, Partnerships, Business Development"
    }
  ]

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Meet Our Team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden border border-gray-100 group cursor-pointer hover:-translate-y-3 hover:scale-105"
            >
              {/* Team Member Photo */}
              <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={`object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110 ${index === 0 ? 'brightness-105 contrast-110 saturate-110' : ''}`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 25vw"
                  quality={100}
                  priority={index === 0}
                  unoptimized
                  style={index === 0 ? {
                    imageRendering: 'crisp-edges',
                    filter: 'contrast(1.15) brightness(1.05) saturate(1.1)'
                  } : {}}
                />
              </div>

              {/* Team Member Card Content */}
              <div className="p-6">
                {/* Name and Position */}
                <div className="text-center mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-1 transition-colors duration-300 group-hover:text-amber-600">
                    {member.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-amber-700 mb-3 transition-transform duration-300 group-hover:scale-110">
                    <Briefcase size={16} className="transition-transform duration-300 group-hover:rotate-12" />
                    <p className="text-base sm:text-lg font-semibold">
                      {member.position}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                {member.bio && (
                  <div className="mb-4 transition-opacity duration-300 group-hover:opacity-90">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">
                      {member.bio}
                    </p>
                  </div>
                )}

                {/* Expertise */}
                {member.expertise && (
                  <div className="mb-4 pb-4 border-b border-gray-200 group-hover:border-amber-300 transition-colors duration-300">
                    <div className="flex items-start gap-2 mb-2">
                      <Award size={16} className="text-amber-600 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                      <p className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-amber-600 transition-colors duration-300">Expertise</p>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {member.expertise}
                    </p>
                  </div>
                )}
                
                {/* Email Link */}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gray-50 hover:bg-amber-600 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={18} className="text-gray-600 hover:text-white transition-colors duration-300" />
                    <span className="text-sm sm:text-base text-gray-700 hover:text-white font-medium transition-colors duration-300">
                      Contact
                    </span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


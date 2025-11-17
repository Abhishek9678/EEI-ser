import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import TurnkeyEVSection from "@/components/turnkey-ev-section"
import CoreServicesSection from "@/components/core-services-section"
import VideoSection from "@/components/video-section"
import HowLiumGoWorks from "@/components/how-lium-go-works"
import TeamSection from "@/components/team-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HeroSection />
      <TurnkeyEVSection />
      <CoreServicesSection />
      <VideoSection />
      <HowLiumGoWorks />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

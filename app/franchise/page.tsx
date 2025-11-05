import Header from "@/components/header"
import Footer from "@/components/footer"
import FranchiseHeroSection from "@/components/franchise/hero-section"
import FranchiseOpportunitySection from "@/components/franchise/opportunity-section"
import FranchiseBenefitsSection from "@/components/franchise/benefits-section"
import FranchiseRequirementsSection from "@/components/franchise/requirements-section"
import FranchiseContactSection from "@/components/franchise/contact-section"

export default function FranchisePage() {
  return (
    <main className="w-full">
      <Header />
      <FranchiseHeroSection />
      <FranchiseOpportunitySection />
      <FranchiseBenefitsSection />
      <FranchiseRequirementsSection />
      <FranchiseContactSection />
      <Footer />
    </main>
  )
}


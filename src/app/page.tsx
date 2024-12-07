import { FeaturesSection } from "@/components/feature-section";
import { Footer } from "@/components/footer";
import HeroSectionTwo from "@/components/hero-section-two";
import { HeroSection } from "@/components/herosection";
import { WhyChooseSection } from "@/components/why-choose-section";

export default function AgentLandingPage() {
      return (
        <main className="bg-background">
      <HeroSection />
      <FeaturesSection />
      <WhyChooseSection />
      <HeroSectionTwo/>
      <Footer />
    </main>
      )
    }    

import { FeaturesSection } from "@/components/feature-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/herosection";
import { WhyChooseSection } from "@/components/why-choose-section";

export default function AgentLandingPage() {
      return (
        <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <WhyChooseSection />
      <Footer />
    </main>
      )
    }    

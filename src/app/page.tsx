import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { IntelligenceSection } from "@/components/sections/IntelligenceSection";
import { ProductPreviewSection } from "@/components/sections/ProductPreviewSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { CTASection } from "@/components/sections/CTASection";
import Demo from "@/components/Demo";
import { AnomalousMatterHero } from "@/components/anomalous-matter-hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        {/* <ReactiveMatterHero /> */}
        <AnomalousMatterHero />
        {/* <HeroSection /> */}
        {/* <TrustSection /> */}
        <ProblemSection />
        <SolutionSection />
        {/* <IntelligenceSection /> */}
        <ProductPreviewSection />
        <VisionSection />
        <Demo />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

import Hero from "@/components/ui/Hero";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PricingSection from "@/components/sections/PricingSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />

      <FeaturesSection />

      <PricingSection />

      <Footer />
    </main>
  );
}
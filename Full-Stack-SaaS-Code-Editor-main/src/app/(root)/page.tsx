import HeroSection from "./_components/LandingPage/HeroSection";
import FeaturesSection from "./_components/LandingPage/FeaturesSection";
import Footer from "./_components/LandingPage/Footer";
import Background from "./_components/LandingPage/Background";
import SmoothScroll from "./_components/LandingPage/SmoothScroll";
import NavigationHeader from "@/components/NavigationHeader";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#0a0a0f] selection:bg-blue-500/30 overflow-x-hidden">
        <Background />
        <NavigationHeader />
        <HeroSection />
        <FeaturesSection />
        <Footer />
      </div>
    </SmoothScroll>
  );
}
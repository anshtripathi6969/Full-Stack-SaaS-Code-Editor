import FeaturesSection from "./_landing/FeaturesSection";
import HeroSection from "./_landing/HeroSection";
import LandingFooter from "./_landing/LandingFooter";
import LandingNavigation from "./_landing/LandingNavigation";
import StatsSection from "./_landing/StatsSection";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white selection:bg-blue-500/30">
            <LandingNavigation />

            <main>
                <HeroSection />
                <StatsSection />
                <FeaturesSection />
            </main>

            <LandingFooter />
        </div>
    );
}

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import CelebritiesSection from "./components/CelebritiesSection";
import TrustSection from "./components/TrustSection";
import HighestSellingSection from "./components/HighestSellingSection";
import BudgetSection from "./components/BudgetSection";
import WatchPromotionsSection from "./components/WatchPromotionsSection";
import EventsSection from "./components/EventsSection";
import StatsSection from "./components/StatsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import WhatsAppSticky from "./components/WhatsAppSticky";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0B]">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <HighestSellingSection />
        <BudgetSection />
        <CelebritiesSection />
        <WatchPromotionsSection />
        <TrustSection />
        <EventsSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppSticky />
    </div>
  );
}

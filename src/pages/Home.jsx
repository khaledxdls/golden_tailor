import AboutusHomeSection from "../components/AboutusHomeSection";
import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import HowItWorkSection from "../components/HowItWorkSection";
import ServicesSection from "../components/ServicesSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutusHomeSection />
      <FeaturesSection />
      <HowItWorkSection />
      <ServicesSection />
    </div>
  );
}

export default Home;

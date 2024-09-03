import AboutusHomeSection from "../components/AboutusHomeSection";
import CtaSection from "../components/CtaSection";
import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import HowItWorkSection from "../components/HowItWorkSection";
import ServicesSection from "../components/ServicesSection";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutusHomeSection />
      <FeaturesSection />
      <HowItWorkSection />
      <ServicesSection />
      <Testimonials />
      <CtaSection />
    </div>
  );
}

export default Home;

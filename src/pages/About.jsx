import AboutusHomeSection from "../components/AboutusHomeSection";
import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import HowItWorkSection from "../components/HowItWorkSection";
function About() {
  return (
    <div>
      <HeroSection pageName="about"/>
      <AboutusHomeSection />
      <FeaturesSection />
      <HowItWorkSection />
      
    </div>
  );
}

export default About;

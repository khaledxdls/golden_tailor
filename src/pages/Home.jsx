import AboutusHomeSection from "../components/AboutusHomeSection";
import CtaSection from "../components/CtaSection";
import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import HowItWorkSection from "../components/HowItWorkSection";
import ServicesSection from "../components/ServicesSection";
import Testimonials from "../components/Testimonials";
import { FaHand } from "react-icons/fa6";
import { GiSewingMachine, GiZipper } from "react-icons/gi";
function Home() {
  const Services = [
    {
      id: 1,
      title: "Alterations and Repairs",
      description:
        "Wedding Dresses, Jackets, Suits, Pants, Shirts, Dresses, Skirts, Fitting Bridalwear and Eveningwear, Patching and Repairing Household Textiles",
      icon: <GiSewingMachine className="w-6 h-6 text-primary-200" />,
    },
    {
      id: 2,
      title: "Custom and Retail Suits",
      description:
        "Custom and Retail Suits: Tailored Perfection, Ready-to-Wear Sophistication.",
      icon: <FaHand className="w-6 h-6 text-primary-200" />,
    },
    {
      id: 3,
      title: "Zipper Repair",
      description:
        "Broken zipper? No problem! At Golden Tailor, we expertly repair or replace zippers to restore your garment's functionality and keep you looking sharp.",
      icon: <GiZipper className="w-6 h-6 text-primary-200" />,
    },
  ];
  return (
    <div>
      <HeroSection pageName="home"/>
      <AboutusHomeSection />
      <FeaturesSection />
      <HowItWorkSection />
      <ServicesSection Services={Services} isHome={true}/>
      <Testimonials />
      <CtaSection />
    </div>
  );
}

export default Home;

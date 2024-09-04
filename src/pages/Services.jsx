import styled from "styled-components";
import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import Testimonials from "../components/Testimonials";
import ButtonCta from "../components/ButtonCta";
import { GiSewingMachine } from "react-icons/gi";

function Services() {
  const Services = [
    {
      id: 1,
      title: "Dress and Skirt Alterations",
      image: "/service1.jpg",
    },
    {
      id: 2,
      title: "Dry cleaning",
      image: "/service10.jpg",
    },
    {
      id: 3,
      title: "Suit Alterations Retail and Custom Suits",
      image: "/service3.jpg",
    },
    {
      id: 4,
      title: "Shirt Alterations",
      image: "/service11.jpg",
    },
    {
      id: 5,
      title: "Wedding Dress Alterations",
      image: "/service5.jpg",
    },
    {
      id: 6,
      title: "Jacket Alterations",
      image: "/service6.jpg",
    },
    {
      id: 7,
      title: "Zipper Replacements",
      image: "/service7.jpg",
    },
    {
      id: 8,
      title: "Pants Alterations",
      image: "/service8.jpg",
    },
    {
      id: 9,
      title: "Fittings and Measurements",
      image: "/service12.jpg",
    },
  ];
  return (
    <div>
      <HeroSection pageName="services" />
      <ServicesSection Services={Services} isHome={false} />
      <FeaturesSection />
      <Testimonials isServices={true} />
      <div className="bg-primary-200 pt-5 md:pt-10 justify-center flex flex-col items-center w-full">
        <GiSewingMachine className="w-16 h-16 md:w-20 md:h-20 text-primary-50 border-2 border-primary-50" />
        <div className="w-full h-[50vh] flex flex-col md:flex-row md:gap-5 sm:gap-2 justify-center items-center">
          <h1 className="w-full md:w-1/2 text-center md:text-left px-4 md:px-0">
            <span className="block text-base md:text-4xl font-bold leading-relaxed text-primary-50">
              Ready to refresh your style? Stop by Golden Tailor and see the
              difference!
            </span>
          </h1>
          <ButtonCta />
        </div>
      </div>
    </div>
  );
}

export default Services;

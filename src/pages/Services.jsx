import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";

function Services() {
  const Services = [
    {
      id: 1,
      title: "Dry Cleaning",
      image:"/public/about_hero.jpg",
    },
    {
      id: 2,
      title: "Wedding Dress Alterations",
      image: "/public/about_hero.jpg",
    },
    {
      id: 3,
      title: "Jacket Alterations",
      image: "/public/about_hero.jpg",
    },
    {
      id: 4,
      title: "Jacket Alterations",
      image: "/public/about_hero.jpg",
    },
  ];
  return (
    <div>
      <HeroSection pageName="services"/>
      <ServicesSection Services={Services} isHome={false}/>
    </div>
  );
}

export default Services;

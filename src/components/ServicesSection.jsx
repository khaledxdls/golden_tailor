import { FaHand } from "react-icons/fa6";
import FeaturesCard from "./FeaturesCard";
import { GiSewingMachine, GiZipper } from "react-icons/gi";
import ButtonPrimary from "./ButtonPrimary";
import { useNavigate } from "react-router-dom";

function ServicesSection() {
  const navigate = useNavigate();
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
    <div className="my-5 p-10 flex flex-col items-center gap-5">
      <p className=" font-bold text-2xl text-center"> Clothing Services </p>{" "}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-10 mt-5">
        {" "}
        {Services.map((feature) => (
          <FeaturesCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}{" "}
      </div>{" "}
      <ButtonPrimary onClick={() => navigate("/services")}>
        {" "}
        Learn More{" "}
      </ButtonPrimary>{" "}
    </div>
  );
}

export default ServicesSection;

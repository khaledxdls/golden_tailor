import { FaCheck, FaDollarSign, FaHand } from "react-icons/fa6";
import FeaturesCard from "./FeaturesCard";

function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: "Custom Tailoring",
      description:
        "We offer custom tailoring services to make sure you get the perfect fit for your clothes.",
      icon: <FaHand className="w-6 h-6 text-primary-200" />,
    },
    {
      id: 2,
      title: "Quality Fabrics",
      description:
        "We use high-quality fabrics to ensure that your clothes are durable and comfortable.",
      icon: <FaCheck className="w-6 h-6 text-primary-200" />,
    },
    {
      id: 3,
      title: "Affordable Prices",
      description:
        "We offer affordable prices for our services to make sure you get the best value for your money.",
      icon: <FaDollarSign className="w-6 h-6 text-primary-200" />,
    },
  ];
  return (
    <div className="my-5 p-10">
      <p className=" font-bold text-2xl text-center">
        Experience Our Hassle - Free Clothing Services
      </p>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-10 mt-5">
        {features.map((feature) => (
          <FeaturesCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturesSection;

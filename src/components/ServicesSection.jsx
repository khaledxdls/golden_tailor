import { useNavigate } from "react-router-dom";
import ButtonPrimary from "./ButtonPrimary";
import FeaturesCard from "./FeaturesCard";
import ServicesCard from "./ServicesCard"; // Assuming ServicesCard is another component for displaying services with images

function ServicesSection({ Services, isHome }) {
  const navigate = useNavigate();

  return (
    <div className="my-5 p-10 flex flex-col items-center gap-5">
      <p className="font-bold text-2xl text-center">Clothing Services</p>

      {isHome ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-10 mt-5">
          {Services.map((card) => (
            <FeaturesCard
              key={card.id}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-5 md:grid-cols-5 md:gap-10 mt-5">
          {Services.map((card) => (
            <ServicesCard
             key={card.id}
             title={card.title}
             image={card.image} />
          ))}
        </div>
      )}

      {isHome && (
        <ButtonPrimary onClick={() => navigate("/services")}>
          Learn More
        </ButtonPrimary>
      )}
    </div>
  );
}

export default ServicesSection;

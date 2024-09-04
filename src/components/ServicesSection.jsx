import { useNavigate } from "react-router-dom";
import ButtonPrimary from "./ButtonPrimary";
import FeaturesCard from "./FeaturesCard";
import ServicesCard from "./ServicesCard"; // Assuming ServicesCard is another component for displaying services with images

function ServicesSection({ Services, isHome }) {
  const navigate = useNavigate();

  return (
    <div className="my-5 p-10 flex flex-col items-center gap-5 min-h-fit">
      <p className="font-bold text-2xl text-center"> Clothing Services </p>{" "}
      {isHome ? (
        <div className="grid sm:grid-cols-1 gap-5 md:grid-cols-3 md:gap-10 mt-5">
          {" "}
          {Services.map((card) => (
            <FeaturesCard
              key={card.id}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}{" "}
        </div>
      ) : (
        <>
          <p className="font-bold text-2xl text-center">
            {" "}
            We can handle all your alterations, tailoring, and seamstress needs{" "}
          </p>{" "}
          <div className=" grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-10 lg:gap-14 mt-5 justify-between w-full  ">
            {" "}
            {Services.map((card) => (
              <ServicesCard
                key={card.id}
                title={card.title}
                image={card.image}
              />
            ))}{" "}
          </div>
        </>
      )}{" "}
      {isHome && (
        <ButtonPrimary onClick={() => navigate("/services")}>
          Learn More{" "}
        </ButtonPrimary>
      )}{" "}
    </div>
  );
}

export default ServicesSection;

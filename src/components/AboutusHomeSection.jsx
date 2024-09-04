import { Link, NavLink, useNavigate } from "react-router-dom";
import ButtonPrimary from "./ButtonPrimary";

function AboutusHomeSection() {
  const navigate = useNavigate();
  return (
    <div className="mt-10 md:-mt-24 rounded-[10px] text-center px-5 py-10 md:px-40 bg-slate-50 mx-5 md:mx-10">
      <h2 className="text-2xl md:text-3xl font-bold text-[#134e4a] leading-[1.2] mb-4 md:mb-[1.2rem]">
        Golden Tailor{" "}
      </h2>{" "}
      <p className="mb-4 md:mb-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.Dolorum ratione
        incidunt illo necessitatibus cum aliquid accusamus distinctio
        dignissimos placeat ducimus venia.Lorem ipsum dolor sit, amet
        consectetur adipisicing elit.Dolorum ratione incidunt illo
        necessitatibus cum aliquid accusamus distinctio dignissimos placeat
        ducimus venia.Lorem ipsum dolor sit, amet consectetur adipisicing
        elit.Dolorum ratione incidunt illo necessitatibus cum aliquid accusamus
        distinctio dignissimos placeat ducimus venia.{" "}
      </p>{" "}
      <ButtonPrimary onClick={() => navigate("/about")}>
        About Us{" "}
      </ButtonPrimary>{" "}
    </div>
  );
}

export default AboutusHomeSection;

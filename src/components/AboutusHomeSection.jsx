import { Link, NavLink } from "react-router-dom";
import ButtonPrimary from "./ButtonPrimary";

function AboutusHomeSection() {
  return (
    <div className=" -mt-24 rounded-[10px] text-center px-40 py-10 bg-slate-50 mx-10 ">
      <h2 class="text-3xl font-bold text-[#134e4a] leading-[1.2] mb-[1.2rem]">
        Golden Tailor
      </h2>{" "}
      <p class=" mb-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.Dolorum ratione
        incidunt illo necessitatibus cum aliquid accusamus distinctio
        dignissimos placeat ducimus venia.Lorem ipsum dolor sit, amet
        consectetur adipisicing elit.Dolorum ratione incidunt illo
        necessitatibus cum aliquid accusamus distinctio dignissimos placeat
        ducimus venia.Lorem ipsum dolor sit, amet consectetur adipisicing
        elit.Dolorum ratione incidunt illo necessitatibus cum aliquid accusamus
        distinctio dignissimos placeat ducimus venia.{" "}
      </p>{" "}
      <ButtonPrimary>
        {" "}
        <NavLink to="/about"> About us </NavLink>{" "}
      </ButtonPrimary>{" "}
    </div>
  );
}

export default AboutusHomeSection;

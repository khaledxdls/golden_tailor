import Slider from "./Slider";

function Testimonials({ isServices }) {
  return (
    <section className=" px-12 py-8">
      <Slider isServices={isServices} />{" "}
    </section>
  );
}

export default Testimonials;

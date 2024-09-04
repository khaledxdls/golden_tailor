import React, { useEffect, useState } from "react";
import ButtonLeft from "./ButtonLeft";
import ButtonRight from "./ButtonRight";

const testimonials = [
  {
    id: 1,
    text: "Golden Tailor transformed my old suit into a modern masterpiece. The fit is impeccable, and the attention to detail is second to none. I'll never go anywhere else for tailoring!",
    author: "John Doe",
    image: "./person4.jpg",
  },
  {
    id: 2,
    text: "AI ordered a custom suit from Golden Tailor for my wedding, and it exceeded all my expectations. The fabric, fit, and craftsmanship were all top-notch. I received so many compliments on the big day!",
    author: "Jane Smith",
    image: "./person1.jpg",
  },
  {
    id: 3,
    text: "I brought in a dress that I thought was beyond saving, but Golden Tailor worked their magic! The alterations were flawless, and now it's my go-to outfit for special occasions.",
    author: "Alice Johnson",
    image: "./person3.jpg",
  },
];

const Slider = ({ isServices }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const lastIndex = testimonials.length - 1;
    console.log(lastIndex, "lastIndex");

    if (currentIndex < 0) {
      setCurrentIndex(lastIndex);
    }
    if (currentIndex > lastIndex) {
      setCurrentIndex(0);
    }
    console.log(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    let slider = setInterval(() => {
      setCurrentIndex(currentIndex + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [currentIndex]);
  return (
    <div>
      <div className="rounded-[10px] flex flex-col text-center px-4 md:px-40 py-8 md:py-14 bg-slate-100 overflow-hidden h-[600px]">
        <p className="text-2xl md:text-3xl font-bold text-primary-50 bg-primary-200 w-fit self-center p-2 md:p-4 leading-[1.2] mb-[0.8rem] text-center">
          Testimonials
        </p>
        <h2 className="text-xl md:text-2xl font-bold text-primary-200 leading-[1.2] mb-[0.8rem]">
          What our Clients are saying
        </h2>
        {!isServices && (
          <p className="text-base md:text-xl mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            ratione incidunt illo necessitatibus cum aliquid accusamus
            distinctio dignissimos placeat ducimus venia.
          </p>
        )}
        <div className="relative">
          <ButtonLeft onClick={() => setCurrentIndex(currentIndex - 1)} />
          <ButtonRight onClick={() => setCurrentIndex(currentIndex + 1)} />
          {testimonials.map((test, personIndex) => {
            let position = "translate-x-full opacity-0";
            if (personIndex === currentIndex) {
              position = "translate-x-0 opacity-100";
            }
            if (
              personIndex === currentIndex - 1 ||
              (currentIndex === 0 && personIndex === testimonials.length - 1)
            ) {
              position = "-translate-x-full opacity-0";
            }
            return (
              <div
                key={personIndex}
                className={`absolute top-0 left-0 flex flex-col gap-[1.2rem] w-full justify-center items-center transition-transform duration-500 ease-in-out ${position}`}
              >
                <blockquote
                  className={`bg-slate-100 text-primary-200 border-l-[10px] border-l-primary-300 text-base md:text-xl font-bold mx-[10px] my-[1.5em] quotes:'\u201C''\u201D''\u2018''\u2019' before:content-[open-quote] before:text-[3em] md:before:text-[4em] before:leading-[0.1em] before:mr-[0.25em]`}
                >
                  "{test.text}"
                </blockquote>
                <div className="flex flex-col items-center">
                  <div className="w-12 md:w-16 h-12 md:h-16 overflow-hidden rounded-full">
                    <img src={test.image} className="w-full bg-bottom" alt="" />
                  </div>
                  <div className="font-bold">
                    <p>
                      <b>Vicky Hladynets</b>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;

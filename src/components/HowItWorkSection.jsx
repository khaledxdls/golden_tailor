function HowItWorkSection() {
  return (
    <div className="gap-x-6 gap-y-8 md:gap-x-24 md:gap-y-32 text-lg items-center p-5 md:p-10 bg-primary-300 text-primary-50">
      <p className="text-center font-bold text-2xl md:text-4xl">
        {" "}
        How it Works{" "}
      </p>{" "}
      <div className="flex flex-col md:flex-row justify-around items-center gap-7 p-4 md:p-8">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-4xl mb-5 md:mb-10 text-accent-400 font-medium">
            Meet With Us{" "}
          </h1>{" "}
          <div className="space-y-4 md:space-y-8">
            <p>
              At Golden Tailor, we believe that the first step to creating a
              perfect fit is getting to know you and your style.Whether you
              visit us in person or schedule a virtual consultation, we take the
              time to understand your specific needs and preferences.From
              discussing alterations to customizing a new piece, our expert
              tailors listen carefully and offer professional advice to ensure
              your vision becomes a reality.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="w-full md:w-1/3 self-center">
          <img src="/howitwork1.jpg" className="rounded-md" alt="calendar" />
        </div>{" "}
      </div>{" "}
      <div className="flex flex-col md:flex-row justify-between items-center gap-7 p-4 md:p-8">
        <div className="w-full md:w-1/3 self-center">
          <img src="/howitwork2.jpg" className="rounded-md" alt="calendar" />
        </div>{" "}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-4xl mb-5 md:mb-10 text-accent-400 font-medium">
            Sit Back and Relax{" "}
          </h1>{" "}
          <div className="space-y-4 md:space-y-8">
            <p>
              Once we have all the details, you can leave the hard work to
              us.Our skilled team meticulously handles every stitch, cut, and
              adjustment with precision and care.Whether it 's a minor
              alteration or a complete transformation, we treat each piece with
              the utmost attention to detail, ensuring a flawless finish.While
              we work, you can sit back, relax, and trust that your garment is
              in the best hands.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="flex flex-col md:flex-row justify-between items-center gap-7 p-4 md:p-8">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-4xl mb-5 md:mb-10 text-accent-400 font-medium">
            Text Notifications{" "}
          </h1>{" "}
          <div className="space-y-4 md:space-y-8">
            <p>
              We know your time is valuable, which is why we keep you updated
              every step of the way.You 'll receive timely text notifications to
              inform you of your garment 's progress, from when we start working
              on it to when it 's ready for pickup or delivery. This way, you'
              re always in the loop and can plan accordingly, making the entire
              process as convenient and stress - free as possible.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="w-full md:w-1/3">
          <img src="/howitwork3.jpg" className="rounded-md" alt="calendar" />
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default HowItWorkSection;

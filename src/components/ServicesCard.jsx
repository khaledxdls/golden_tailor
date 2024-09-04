import React, { useState } from "react";

function ServicesCard({ title, image }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-slate-100 h-[500px] overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className={`absolute inset-0 w-full h-full object-cover brightness-50 ease-in-out duration-500 transform ${
          isHovered ? "blur-sm scale-105" : ""
        }`}
        src={image}
        alt="services"
      />
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center text-center transition-opacity duration-500 ease-in-out">
          <p className="font-bold text-2xl text-primary-50">{title}</p>
        </div>
      )}
    </div>
  );
}

export default ServicesCard;

import React from "react";

const Carousel = ({ name, image }) => {
  return (
    <div className="w-full max-w-250 h-130 bg-[#d3bfa6] px-20">
      <img
        src={image}
        alt={`${name}`}
        className="w-full h-full object-contain object-center"
      />
    </div>
  );
};

export default Carousel;

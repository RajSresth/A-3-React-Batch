import React from "react";

const Shimmer = () => {
  return (
    <div className="container">
      <div className="center__container">
        {Array(30)
          .fill("")
          .map((_, index) => (
            <div key={index} className="box"></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;

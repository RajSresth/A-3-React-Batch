import React from "react";

const ShimmerProduct = () => {
  return (
    <div className="w-screen min-h-[calc(100vh - 100px)]">
      <div className="mx-auto w-screen max-w-300 flex flex-wrap gap-14 p-25">
        {Array(30)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="w-65 h-75  bg-gray-100 rounded-md"
            ></div>
          ))}
      </div>
    </div>
  );
};

export default ShimmerProduct;

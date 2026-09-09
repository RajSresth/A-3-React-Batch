import React from "react";

const ProductList = (props) => {
  return (
    <div className="card">
      <div className="profile">
        <img src={props.images[0]} alt="" />
      </div>
      <div className="info">
        <div className="title">{props.title}</div>
        <div className="category">{props.category}</div>
        <div className="price">{props.price}</div>
        <button>Order Now</button>
      </div>
    </div>
  );
};

export default ProductList;

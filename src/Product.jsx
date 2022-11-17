import React from "react";
import "./product.css";
const Product = ({ id, title, image, price, rating }) => {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={Math.random()}>⭐</p>
              ))}
          </div>
        </div>
        <img src={image} alt="" />
        <button>Add to Basket</button>
      </div>
    </div>
  );
};

export default Product;

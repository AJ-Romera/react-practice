import React from "react";
import "./App.css";

const ProductCard = ({ name, imgUrl, color, price, setTotalPay }) => {
  const pay = (element) => {
    setTotalPay((e) => e + price);
    element.target.parentNode.parentNode.style.display = "none";
  };

  return (
    <div className="product-card" style={{ backgroundColor: color }}>
      <span className="product-card__name">{name}</span>
      <img className="product-card__img" src={imgUrl} alt={imgUrl} />
      <div className="product-card__buy-section">
        <span>
          Price: <br /> {price}€
        </span>
        {price > 0 ? (
          <button onClick={pay}>Buy</button>
        ) : (
          <button disabled>Buy</button>
        )}
      </div>
    </div>
  );
};

ProductCard.defaultProps = {
  name: "Sold Out",
  imgUrl:
    "https://images.pexels.com/photos/2690766/pexels-photo-2690766.jpeg?auto=compress&cs=tinysrgb&w=400",
  color: "chocolate",
  price: "--",
};

export default ProductCard;

import React from "react";
import "./App.css";

const Act10 = ({ products }) => {
  const addOne = (e) => {
    ++e.target.innerHTML;
  };
  const productCard = products
    .filter((product) => product.price > 90 && product.price < 160)
    .map((product) => (
      <div key={product.name}>
        <div>{product.name}</div> <div>{product.price}€</div>{" "}
        <span className="vote" onClick={addOne}>
          0
        </span>{" "}
        votes
      </div>
    ));

  return <>{productCard}</>;
};

export default Act10;

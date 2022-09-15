import React from "react";
import "./App.css";

const Act7 = ({ products }) => {
  const productCard = products.map((product) => (
    <div key={product.name} className="card-product">
      <div>
        The product{" "}
        <span className="card-product__name--crimson">
          {product.name.toUpperCase()}
        </span>{" "}
        cost {product.price}€
      </div>
      <img src={product.imgUrl} alt={product.imgUrl} />
    </div>
  ));

  return <>{productCard}</>;
};

export default Act7;

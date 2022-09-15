import React from "react";
import "./App.css";

const Act8 = ({ products }) => {
  const deleteItem = (e) => {
    e.target.parentNode.remove();
  };
  const productCard = products
    .filter((product) => product.price <= 100)
    .map((product) => (
      <div key={product.name} className="card-product">
        <span>{product.name} </span>
        <button onClick={deleteItem}>Delete</button>
      </div>
    ));

  return <>{productCard}</>;
};

export default Act8;

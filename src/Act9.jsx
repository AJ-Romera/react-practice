import React from "react";
import "./App.css";

const Act9 = ({ products }) => {
  const productCard = products.find(
    (product) =>
      product.name.substring(0, 1) === "b" ||
      product.name.substring(0, 1) === "B"
  );

  return (
    <>
      {productCard ? productCard.name : "Nothing found with those parameters!"}
    </>
  );
};

export default Act9;

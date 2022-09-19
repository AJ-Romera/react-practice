import React from "react";
import { useParams } from "react-router-dom";

function Model() {
  const { product } = useParams();
  const productName =
    product.slice(0, 1).toUpperCase() + product.slice(1).toLowerCase();

  return (
    <div>
      {/* <img src="" alt="" /> */}
      <h2>{productName}</h2>
    </div>
  );
}

export default Model;

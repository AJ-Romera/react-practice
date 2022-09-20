import React, { useReducer, useRef, useState } from "react";

const types = {
  minus: "minus",
  more: "more",
  "delete-product": "delete-product",
  buy: "buy",
};
const initValue = [];
const reducer = (state, action) => {
  switch (action.type) {
    case types.minus:
      return state.map((p) =>
        action.payload === p.id && p.quantity > 1
          ? { ...p, quantity: p.quantity-- }
          : p
      );
    case types.more:
      return state.map((p) =>
        action.payload === p.id ? { ...p, quantity: p.quantity++ } : p
      );

    case types["delete-product"]:
      return state.filter((p) => p.id !== action.payload);

    case types.buy:
      return [...state, action.payload];

    default:
      return state;
  }
};

const Act16 = () => {
  const [userProduct, setUserProduct] = useState("");
  const [productList, dispatch] = useReducer(reducer, initValue);
  const inputName = useRef(null);

  const getProductValue = (e) => {
    setUserProduct(e.target.value);
  };

  return (
    <div>
      <h2 className="title">
        Writte the product you want to buy and click the Add button
      </h2>
      <div className="main-container">
        <div className="main-container__form">
          <label htmlFor="product">Product:</label>
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter" && userProduct.length > 0) {
                setUserProduct("");
                dispatch({
                  type: types.buy,
                  payload: {
                    id: Math.random(),
                    name: `${userProduct
                      .charAt(0)
                      .toUpperCase()}${userProduct.slice(1)}`,
                    quantity: 1,
                  },
                });
              }
            }}
            id="product"
            ref={inputName}
            onChange={getProductValue}
            type="text"
            placeholder="Bread"
            value={userProduct}
          />
          <button
            onClick={() => {
              if (userProduct.length > 0) {
                inputName.current.focus();
                setUserProduct("");
                dispatch({
                  type: types.buy,
                  payload: {
                    id: Math.random(),
                    name: `${userProduct
                      .charAt(0)
                      .toUpperCase()}${userProduct.slice(1)}`,
                    quantity: 1,
                  },
                });
              }
            }}
          >
            Add
          </button>
        </div>
        {productList.map((product) => (
          <div className="product" key={product.id}>
            {product.name} ({product.quantity} units)
            <button
              onClick={() =>
                dispatch({ type: types.minus, payload: product.id })
              }
            >
              -
            </button>
            <button
              onClick={() =>
                dispatch({ type: types.more, payload: product.id })
              }
            >
              +
            </button>
            <button
              className="deleteButton"
              onClick={() =>
                dispatch({ type: types["delete-product"], payload: product.id })
              }
            >
              Ω
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Act16;

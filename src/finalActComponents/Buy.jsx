import { useContext } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Context from "../finalActContext/Context";
import types from "../finalActContext/types";
import data from "../finalActData/data";

const Buy = () => {
  const { name } = useParams();
  const foundDestination = data.find((d) => d.name === name);
  const im = `/images/${foundDestination.image}`;
  const navigation = useNavigate();
  const back = () => {
    navigation(-1);
  };

  const { dispatch2, buy, totalPrice, setTotalPrice } = useContext(Context);
  const found = buy.find((place) => place.name === name);
  const newBuy = () => {
    setTotalPrice(totalPrice + foundDestination.price);
    const action = {
      type: types.buy,
      payload: { name: name, price: foundDestination.price },
    };
    dispatch2(action);
  };
  const cancel = () => {
    setTotalPrice(totalPrice - foundDestination.price);
    const action = {
      type: types.cancel,
      payload: { name: name },
    };
    dispatch2(action);
  };
  if (!foundDestination) {
    return <Navigate to="/error404" />;
  }
  return (
    <>
      <div className="container">
        <h2>{name}</h2>
        <div className="service">{foundDestination.service}</div>
        <div className="big-image">
          <img src={im} alt="" />
          <div className="price">{foundDestination.price}€</div>
          {!found && (
            <button className="button buy-button" onClick={newBuy}>
              Buy
            </button>
          )}
          {found && (
            <button className="button cancel-button" onClick={cancel}>
              Cancel
            </button>
          )}
          <button className="button back-button" onClick={back}>
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Buy;

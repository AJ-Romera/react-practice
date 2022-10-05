import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../finalActContext/Context";
import types from "../finalActContext/types";

const Payment = () => {
  const { buy, dispatch2, reference, totalPrice, setTotalPrice } =
    useContext(Context);
  return (
    <>
      <section className="path">
        {buy.length > 0 && <h3>You are willing to buy:</h3>}
        {buy.length < 1 && (
          <div className="warn-message">
            You haven´t add anything. Visit:{<br />}
            {<Link to={"/north"}>North</Link>},{" "}
            {<Link to={"/south"}>South</Link>}
            or
            {<Link to={"/outside-peninsula"}>Outside the peninsula</Link>} to
            see our offers!
          </div>
        )}
        {buy.map((place) => (
          <div key={place.name}>
            <button
              className="button cancel"
              onClick={() => {
                setTotalPrice(totalPrice - place.price);
                dispatch2({
                  type: types.cancel,
                  payload: { name: place.name },
                });
              }}
            >
              Cancel
            </button>
            {place.name} ({place.price}€)
          </div>
        ))}
        {buy.length > 0 && <h3>Total to pay: {totalPrice}€</h3>}
        <h3>Reference: {reference}</h3>
      </section>
    </>
  );
};

export default Payment;

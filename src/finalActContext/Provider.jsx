import { useReducer, useState } from "react";
import authReducer from "./authReducer";
import buyReducer from "./buyReducer";
import Context from "./Context";
import types from "./types";

const init = () => {
  const user = localStorage.getItem("value");
  return {
    logged: !!user,
    user: user,
  };
};

const initValue = [];
const Provider = ({ children }) => {
  const [auth, dispatch] = useReducer(authReducer, {}, init);
  const [buy, dispatch2] = useReducer(buyReducer, initValue);
  const [reference, setReference] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const logMeIn = (user) => {
    const action = {
      type: types.login,
      payload: user,
    };
    localStorage.setItem("value", user);
    dispatch(action);
  };

  const logMeOut = () => {
    const action = {
      type: types.logout,
      payload: null,
    };
    localStorage.removeItem("value");
    dispatch(action);
  };

  return (
    <Context.Provider
      value={{
        buy,
        dispatch2,
        ...auth,
        logMeIn,
        logMeOut,
        reference,
        setReference,
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;

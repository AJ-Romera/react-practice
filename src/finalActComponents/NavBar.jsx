import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Context from "../finalActContext/Context";
import "../App.css";

const Navbar = () => {
  const { logMeOut } = useContext(Context);
  const navigation = useNavigate();
  const logout = () => {
    logMeOut();
    navigation("login", { replace: true });
  };

  return (
    <nav>
      <div>
        <NavLink to="north">North</NavLink>
        <NavLink to="south">South</NavLink>
        <NavLink to="outside-peninsula">Outside the Peninsula</NavLink>
        <NavLink to="payment">Payment</NavLink>
      </div>
      <button onClick={logout}>Logout</button>
    </nav>
  );
};

export default Navbar;

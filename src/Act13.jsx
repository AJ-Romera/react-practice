import React from "react";
import "./App.css";
import Languages from "./act13Components/Languajes";
import Info from "./act13Components/Info";
import Provider from "./context/Provider";

const Act13 = () => {
  return (
    <Provider>
      <Languages />
      <Info />
    </Provider>
  );
};

export default Act13;

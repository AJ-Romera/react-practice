import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./act14Components/NavBar";
import Error404 from "./act14Components/Error404";
import Home from "./act14Components/Home";
import Model from "./act15Components/Model";

function Act14() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:product" element={<Model />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Act14;

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./act14Components/NavBar";
import Headphones from "./act14Components/Headphones";
import Watch from "./act14Components/Watch";
import Donuts from "./act14Components/Donuts";
import Shoes from "./act14Components/Shoes";
import GoPro from "./act14Components/GoPro";
import Laptop from "./act14Components/Laptop";
import Error404 from "./act14Components/Error404";
import Home from "./act14Components/Home";

function Act14() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/donuts" element={<Donuts />} />
        <Route path="/donus" element={<Navigate to="/donuts" />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/gopro" element={<GoPro />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Act14;

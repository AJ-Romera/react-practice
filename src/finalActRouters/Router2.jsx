import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "../finalActComponents/NavBar";
import North from "../finalActComponents/North";
import OutsidePeninsula from "../finalActComponents/OutsidePeninsula";
import South from "../finalActComponents/South";
import Error404 from "../finalActComponents/Error404";
import Buy from "../finalActComponents/Buy";
import Payment from "../finalActComponents/Payment";

const Router2 = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="north" element={<North />} />
        <Route path="south" element={<South />} />
        <Route path="outside-peninsula" element={<OutsidePeninsula />} />
        <Route path="payment" element={<Payment />} />
        <Route path="destination/:name" element={<Buy />} />
        <Route path="/" element={<Navigate to="north" />} />
        <Route path="error404" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default Router2;

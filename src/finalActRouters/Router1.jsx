import { Routes, Route } from "react-router-dom";

import Login from "../finalActComponents/Login";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import Router2 from "./Router2";

const Router1 = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <Router2 />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
};

export default Router1;

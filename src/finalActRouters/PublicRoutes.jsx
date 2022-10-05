import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Context from "../finalActContext/Context";

const PublicRoutes = ({ children }) => {
  const { logged } = useContext(Context);
  return logged ? <Navigate to="/north" /> : children;
};

export default PublicRoutes;

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Context from "../finalActContext/Context";

const PrivateRoutes = ({ children }) => {
  const { logged } = useContext(Context);
  return logged ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;

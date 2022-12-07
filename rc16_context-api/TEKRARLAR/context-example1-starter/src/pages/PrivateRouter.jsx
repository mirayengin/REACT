import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const PrivateRouter = () => {
  //!Consuming
  const {user} = useContext(LoginContext)

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;

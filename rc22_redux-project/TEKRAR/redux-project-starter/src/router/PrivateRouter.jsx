import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {

  //?consuming yaptık
  const {user} =useSelector((state) => state.auth)

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;

import { Navigate, Outlet } from "react-router-dom";


const PrivateRouter = () => {
  const userrAuth = false;

  return (
    <div>
      {userrAuth ? <Outlet/> : <Navigate to="/login"/> }
    </div>
  )
}

export default PrivateRouter
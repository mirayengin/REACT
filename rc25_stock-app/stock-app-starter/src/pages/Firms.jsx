import { useEffect } from "react";
import useStockCalls from "../hooks/useStockCalls";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchStart,fetchFail, getSuccess } from "../features/authSlice";
// import { fetchStart, fetchFail, getSuccess } from "../features/stockSlice";

const Firms = () => {

  //! useStockCalls da bu GETFİRMS FONK YAZDIK VE BURAYA İMPORT ETTİK CUSTOM HOOKTAM
  const { getFirms } = useStockCalls();
  // //?Burda stateleri güncellemek için istek (dispatch) oluşturduk
  // const dispatch = useDispatch();

  // //? Token bz api ye istek gönderdiğimizde giriş için otomatik bize veriyor
  // const { token } = useSelector((state) => state.auth);
  // const BASE_URL = "https://13730.fullstack.clarusway.com/";

  // const getFirms = async () => {
  //   //! Dispatchhlerin actions larını biz yazıyoruz ve oradan import ediyoruz. Bu veriyi statelere gönderim başladığında
  //   dispatch(fetchStart());
  //   const url = "firms";

  //   try {
  //     //! Burda biz axios ile apiden okuma işlemi yapıyoruz.Tabi bunuda token ekleyerek. Bu token ekleme güvenlikli apilerde oluyor
  //     const { data } = await axios.get(`${BASE_URL}stock/firms/`, {
  //       headers: { Authorization: `Token ${token}` },
  //     });
  //     console.log(data);
  //     //? başarılı olduğunda
  //     dispatch(getSuccess(data, url));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getFirms();
  }, []);

  return <div>Firms</div>;
};

export default Firms;

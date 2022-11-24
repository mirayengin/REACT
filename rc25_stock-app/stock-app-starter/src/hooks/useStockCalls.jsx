import { axiosWithToken } from "../service/axiosInstance";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
// import useAxios from "./useAxios";

const useStockCalls = () => {
  const dispatch = useDispatch();

  //? bilgileri almak için saffaların tek tek basic hale getirdi bu fonk
  const getStockData = async (url) => {
    dispatch(fetchStart());

    try {
      //? Url gönderdik buna ve bu url kısmıda otomatik oldu
      const { data } = await axiosWithToken.get(`stock/${url}/`);
      console.log(data);
      //? başarılı olduğunda
      dispatch(getSuccess(data, url));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

const getFirms = () => getStockData("firms")
const getSales = () => getStockData("sales")

  // const getFirms = async () => {
  //   //! Dispatchhlerin actions larını biz yazıyoruz ve oradan import ediyoruz. Bu veriyi statelere gönderim başladığında
  //   dispatch(fetchStart());
  //   const url = "firms";

  //   try {
  //     //! Burda biz axios ile apiden okuma işlemi yapıyoruz.Tabi bunuda token ekleyerek. Bu token ekleme güvenlikli apilerde oluyor
  //     const { data } = await axiosWithToken.get(`stock/firms/` )
  //     console.log(data);
  //     //? başarılı olduğunda
  //     dispatch(getSuccess(data, url));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     console.log(error);
  //   }
  // };
  return { getFirms , getSales};
};

//! custom hooklar bir jsx döndürmez sadece yazdığınnız fonk return eder
export default useStockCalls;

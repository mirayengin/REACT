// import { axiosWithToken } from "../service/axiosInstance";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
import useAxios from "./useAxios";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";

const useStockCalls = () => {
  const dispatch = useDispatch();
  //! axioswithtoken artık burdan geliyor
  const { axiosWithToken } = useAxios();


  //! --------- GET CALLS --------------

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


  
  //! --------- DELETE CALLS --------------
  
  const deleteStockData = async (url,id) => {
    try {
      await axiosWithToken.delete(`stock/${url}/${id}/`)
      toastSuccessNotify(`${url} sucessfully deleted`)
      getStockData()
    } catch (error) {
      toastErrorNotify(`${url} can not be deleted`)
    }
  }

  const deleteFirm = (id) => deleteStockData("firms", id)



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
  return {getStockData, getFirms , getSales, deleteFirm};
};

//! custom hooklar bir jsx döndürmez sadece yazdığınnız fonk return eder
export default useStockCalls;

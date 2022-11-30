// import { axiosWithToken } from "../service/axiosInstance";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getSuccess,getProCatBrandsSuccess } from "../features/stockSlice";
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
      dispatch(getProCatBrandsSuccess(data, url));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getFirms = () => getStockData("firms");
  const getSales = () => getStockData("sales");
  const getCategories = () => getStockData("categories");
  const getBrands= () => getStockData("brands");
  const getProducts = () => getStockData("products");
  

  //? Burda bu statelerden veriler aynı anda çekme işlemi yapmak için bunu yaptık.
  const getProCatBrands = async () => {

    //! Veri alma işlemi başladığına dair
    dispatch(fetchStart());
    try {
      const [products,categories,brands] = await Promise.all(
      [axiosWithToken.get("stock/products/")],
      [axiosWithToken.get("stock/categories/")],
        [axiosWithToken.get("stock/brands/")])
      
      //? Dönen veri bir array olduğu için yeni bir success dispatch ı yazıyoruz.
        dispatch(getProCatBrandsSuccess([products.data, categories.data, brands.data]));
    } catch (error) {
      console.log(error);
    }
  }

  //! --------- DELETE CALLS --------------

  const deleteStockData = async (url, id) => {
    try {
      await axiosWithToken.delete(`stock/${url}/${id}/`);
      toastSuccessNotify(`${url} sucessfully deleted`);
      getStockData();
    } catch (error) {
      toastErrorNotify(`${url} can not be deleted`);
    }
  };

  const deleteFirm = (id) => deleteStockData("firms", id);
  const deleteProduct = (id) => deleteStockData("products", id);

  //! --------- POST CALLS --------------
//? bu fonk modal da yazdığımız firm bilgilerini apiye gönderiyor.
  const postStockData = async (info, url) => {
    try {
      await axiosWithToken.post(`stock/${url}/`, info);
      toastSuccessNotify(`${url} sucessfully add`);
      getStockData();
    } catch (error) {
      toastErrorNotify(`${url} can not be add`);
    }
  };

  const postFirm = (info) => postStockData(info, "firms");


  //! --------- PUT CALLS --------------
//? bu fonk modal da düzelttiğimiz firm bilgilerini apiye gönderiyor eskisinin üzerine yazıyor.
  const putStockData = async (info, url) => {
    try {
      await axiosWithToken.put(`stock/${url}/${info.id}/`, info);
      toastSuccessNotify(`${url} sucessfully updated`);
      getStockData();
    } catch (error) {
      toastErrorNotify(`${url} can not be updated`);
    }
  };

  const putFirm = (info) => putStockData(info, "firms");

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
  return {
    getStockData,
    getFirms,
    getSales,
    deleteFirm,
    postFirm,
    postStockData,
    putFirm,
    putStockData,
    getCategories,
    getBrands,
    getProducts,
    getProCatBrands,
    // getProCatBrandsSuccess,
    deleteProduct

    
  };
};

//! custom hooklar bir jsx döndürmez sadece yazdığınnız fonk return eder
export default useStockCalls;

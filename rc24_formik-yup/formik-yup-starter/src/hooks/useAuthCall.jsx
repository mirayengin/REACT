import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
} from "../features/authSlice";

const BASE_URL = "https://clarusway.pythonanywhere.com/";

const useAuthCall = () => {
  const dispatch = useDispatch();

  //? login işlemi yaparken api ye bir istek gönderiyoruz ve bu girilen datalar bizim için önemli ve redux state de depolandığı için dispatch yayınlıyoruz.Sürekli post,put,get işlemi yapılacağından bunları burda yazıp export etmek daha best olacak
  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/auth/login/`,
        userInfo
      );
      dispatch(loginSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios.post(`${BASE_URL}account/auth/logout/`);
      dispatch(logoutSuccess());
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  return { login,logout };
};

export default useAuthCall;

//! Hook lar normal bir js dosyasında kullanılamaz bu yüzden bizde bir custom hook yazdık kendimize. Custom hook bize hookları kullanmamızı sağlıyor. Custom hook için oluşturulan componentin ismi ise use ile başlamak zorunda

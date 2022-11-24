import React from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';


const BASE_URL = "https://13730.fullstack.clarusway.com/"


//!Bu da localden token okumadan api isteği için
export const axiosPublic = axios.create({
  baseURL: BASE_URL,
})



const useAxios = () => {
  //! Token ı biz şimdi stateden okuyacağız bu yüzden localden okumada kaynaklanan geçikme olmayacağı için intercepter yazmaya ve localden okumaya gerek kalmadı
const {token} =useSelector((state) => state.auth)
  
  //? Burda apiye istekte bulunucağımız zaman kullanmak için sürekli yazacağımız instance codunu yazdık ve istekte bulunacağımız zaman sadece import etmemiz yeterli kullanacağımız yerde
  const axiosWithToken = axios.create({
      baseURL: BASE_URL,
      //?Aşağıda her istekten önce intercepter da bu headers kısmı çalışacağı için burda yazmaya gerek kalmadı
      headers: {Authorization: `Token ${token}`   },
  });
  

  return {axiosWithToken}
}

export default useAxios
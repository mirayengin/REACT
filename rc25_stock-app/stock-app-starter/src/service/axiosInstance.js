import axios from 'axios';

//! Hookları sadece react componentinde çağırdığımız iin burda token ı localStorage den okuduk.
const escapedToken = JSON.parse(localStorage.getItem("persist:root"))?.token;
//! formatı düzgün olsun diye token ı tekrar parse ettik
const token = escapedToken && JSON.parse(escapedToken);

//? Burda apiye istekte bulunucağımız zaman kullanmak için sürekli yazacağımız instance codunu yazdık ve istekte bulunacağımız zaman sadece import etmemiz yeterli kullanacağımız yerde
export const axiosWithToken = axios.create({
    baseURL: "https://13730.fullstack.clarusway.com/",
    //?Aşağıda her istekten önce intercepter da bu headers kısmı çalışacağı için burda yazmaya gerek kalmadı
    // headers: {Authorization: `Token ${token}`   },
});


//! Bazen bu parse işlemlerinde dolayı persist local a token yazmakta gecikiyor bundan dolayı bizde bu interceptor u kullanıyoruz. Bu en önce çalışıyor ve ilk önce ne yapılacaksa yazmamıza olanak sağlıyor.
axiosWithToken.interceptors.request.use((config) => {
    // Do something before request is sent
    console.log("interception run");
    //? Api yapılacak her istekten önce bu çalışacak ve token ın boş olması engellenmiş olacak
    if (!config.headers["Authorization"]) {
        config.headers["Authorization"] = `Token ${token}`;
      }
    return config;
})
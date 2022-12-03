//?===============================================
//?                USEEFFECT HOOK
//?===============================================
//! UseEffect Hook'u fonksiyonel componenler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

import { useState, useEffect } from "react";

//! useEffect(() => {
//*   /* ComponentDidMount code */
//! }, []);

//! useEffect(() => {
//*   */ ComponentDidMount + componentDidUpdate code */
//! }, [var1, var2]);
//? useEffect içinde sadece componentDidUpdate kodlarını çalıştıramıyoruz

//! useEffect(() => {
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [var1, var2]); //? Dependency Array

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  //? componentDidMount
  //! fetch, asyn-await ,localStorage, setTimeout, setInterval();
  // useEffect(() => {
  //   console.log("Mounting");
  //? setTımeout func ile verieln süre kadar bekletip süre sonunda çalıştırıyoruz bu func içindekileri
  //   setTimeout(() => {
  //     alert("Data Fetched");
  //   }, 3000);
  // }, []);

  //?componentDidMount + componentDidUpdate
  // useEffect(() => {
  //   console.log("Mounting + Updating");
  //   setTimeout(() => {
  //     alert("Data Fetched");
  //   }, 1000);
  // }, [count]);

  //?componentDidUnmount
  const fetchData = () => {
    console.log("Data Fetched");
  };




  //! Normal değişkenler useEffect içinde çalışmaz illaki state olmalıdır.
  //? depency Array i silersek bu useEffect ComponentDidMount +  componentDidUpdate gibi çalısır.
  useEffect(() => {
    //! ComponentDidMount +  componentDidUpdate

    //?setInterval ile timer kurulur ve belirtilen her süresinde parantezinin içindekini çalıştırır.
    const timerId = setInterval(fetchData, 1000);
    console.log("Mounting");

    return () => {
      //! Clean-Up function (componentWillUnmount)

      //? timerId adında bir timer kuruldu ve bu bu arka  planda sürekli belirttiğiniz sürede çalışıyor.Bunu durdurmak için clearInterval() func kullanılır.
      clearInterval(timerId);
      console.log("Unmounting");
    };
  }, []);//! Bu boş array (Dependency Array)

  console.log("Rendering");






  return (
    <div className="container text-center">
      <h1 className="text-danger">USE EFFECT</h1>
      <h3>COUNT={count}</h3>
      <button className="btn btn-info" onClick={() => setCount(count + 1)}>
        INC
      </button>
    </div>
  );
};

export default UseEffectHook;

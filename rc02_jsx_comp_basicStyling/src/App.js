import React from "react";
import Contect from "./companents/Content";
import Footer from "./companents/footer";
import Header from "./companents/Header";


//? React,JSX kullanmaktadir.
//? JSX'de, HTMl elementleri dogrudan JS icerisinde kullanilabilir


//! Componentler, HTML,CSS ve JS kodlarindan meydana gelmiş
//! bir kod parcacigidir.
//! Bir componentin return () kismi ise JSX kodlari icerir.
//! JSX'in kendine gore bazi kurallari vardir. Ornegin bir
//! component eger birden fazla html elementi dondurmesi
//! gerekirse bunlari tek bir container elemani ile sarmayalarak
//! dondurmelidir.container icin div, article, header, <> v.b
//! herhangi bir element kullanilabilir.
//? App componentinin function declaration ile tanımlanması


//! style yapılmayacaksa fragmant kullanılabilir.
function App() {
  return (
    <> 
      <h1>JSX & COMPONENTS & BASİC STYLING</h1>
      <Header />
      <Footer />
      <Contect/>

    </>
  );
}

export default App;

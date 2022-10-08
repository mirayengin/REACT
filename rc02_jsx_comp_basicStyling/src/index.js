import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

//! index componenti ReactDOM.createRoot() metodu ile
//! public klasorunde yer alan index.html icersindeki id'si root
//! olan elemana erisir.
//* render() metodu içerisinde App componenti cagrilir.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

// const a = 5;

// const element = () => {
//     return (<>
//         <h1>Hello React {a}</h1>
//         <p>merhaba</p>
//     </>);
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element());

// const Element = () => {
//     return (<>
//         <h1>Hello React {a}</h1>
//         <p>merhaba</p>
//     </>);
// };

//! burada companent olarak çağırdık. bu yüzden baş harfi büyük oldu.
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Element/>);

// const App = () => {
//     return (<>
//         <h1>Hello React {a}</h1>
//         <p>merhaba</p>
//         <Child/>
//         <Child/> //! BİR KERE TANIMLADIK VE İSTEDİĞİMİZ KADAR KULLANIYORUZ.
//         <Child />
        

//     </>);
// };


// const Child = () => <p>I am A Child</p>
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App/>);
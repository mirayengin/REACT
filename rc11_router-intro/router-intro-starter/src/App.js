import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";

//! React-router multi-page yapmayı sağlayan bir library react ı
//! Lİnke göre componentleri çagirmamızı sağlar react-router
//!BrowserRuoter ile render edilecekler sarmallanılır.
//! Link vermek için Lİnk ve Navlink ile link verecez
//!BrowserRoute içinde ve Routes dışında olanlar her sayfada sabit olacak




function App() {
  return (
    <BrowserRouter>
      <Nav />
      {/*//!routes içindekiler değişken olanlaar browser ve routes arasındakiler sabit olanlar sayfada*/}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/instructors" element={<Instructors />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route> {/*//!Hatalı bir url de buraya gidecek*/}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

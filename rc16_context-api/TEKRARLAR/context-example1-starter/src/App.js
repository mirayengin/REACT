import Footer from "./components/Footer";
import Navs from "./components/Navs";
import About from "./pages/About";
import Home from "./pages/Home";
import People from "./pages/People";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PersonDetail from "./pages/PersonDetail";
import Login from "./pages/Login";
import { LoginContext } from "./context/LoginContext";
import { useState } from "react";
import PrivateRouter from "./pages/PrivateRouter";

function App() {
  //? Context State e atmak için burda tanımladık
  const [user, setUser] = useState({ email: "", password: "" });

  return (
    //? Router elemanlarında da kullanılabileceği için context içindeki datalar bunu böyle sarmalladık.
    //! Provider kullanma sebebi sarmallama prop u için
    <LoginContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Navs />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          {/* //?Burda relative path kullandık o yüzden sadece :id diye yazıyoruz */}
          <Route path="people" element={<PrivateRouter />}>
            <Route path="" element={<People />} />
            <Route path=":id" element={<PersonDetail />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;

//? Context API (Global State Management)
//? State i bir ortak noktya koymaya (Lİftting -Up) denir
//? Props Drilling: Propsları yukarıdan aşağıya doğru göndermek(Parenttan - Childa)
//? Bir datanın diğer componetlere birden hepsine iletilmesine "FLUİDİNG" denir.
//? Globalden çok Local state i kullanmak memory için daha iyi
//? Theme,Login,Language gibi dataların gerektiği yerlerde Context-API kullanmak mantıklı(Çok dinamik olmayan yerler)

//! --------EXAMPLE------

//!Creating
//? export const LoginContext = createContext()

//?Providing
//! <LoginContext.Provider value= {{user, setUser}}>
//? <App/> (Tüm childlara gider)
//! </LoginContext.Provider >

//!Consuming
//? const {user,setUser} = useContext(LoginContext)

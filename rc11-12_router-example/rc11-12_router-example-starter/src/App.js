import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import Paths from "./pages/Paths";
import PersonDetail from "./pages/PersonDetail";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FullStack from "./pages/FullStack";
import Aws from "./pages/Aws";
import PrivateRouter from "./pages/PrivateRouter";
import Login from "./pages/Login";

//? Link, NavLink ve Navigate componentleri declerative routing
//? gerceklestirmek icin kullanilir.
//? Ornegin: Link ve NavLink Sayfada gorulebilen, kullanciyla
//? bir etkilesim icerisinde bulunarak yonledirme yapilan bir
//? componentlerdir. (Nav v.b)

//? Navigate componenti sayfada gorulmeyen ve programsal olarak bir linkin
//? bir baska linke yonledirilmesi icin kullanilabilir. (v5 -> Redirect)
//? Navigate, Component seviyesi Routing icin kullanilir.

//* useNavigate() ise imperative routing icin elverislidir.
//* Ornegin bir fonksiyon,event veye UseEffect icerisinde programsal
//* olarak yonledirme yapmak icin kullanilabilir.

function App() {
  //? Component seviyesinde hook kullanılmaz
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}

        {/* //! İndex elementim Home dur ve ona göre diğer route larda git. Burada relative bir route var ve aşağıdaki route ların kesmeleri silinir adreslerindeki */}
        <Route index element={<Home />} />
        <Route path="people" element={<People />} />
        <Route path="people/:id" element={<PersonDetail />} />

        {/* //! Paths içinde başka child olacaksa böyle yazıyoruz yani nested yapı oluşturuyoruz */}
        <Route path="paths" element={<Paths />}>
          {/* //! Burada paths e gittiğimiz zaman default olarak fullstack componenti paths componentinde acılsın diyoruz. Bunuda index ile yapıyoruz. */}
          {/*//! <Route path="fullstack" element={<FullStack/>}></Route> */}
          <Route index element={<FullStack />}></Route>

          {/* //! burada patsh ı actığımızda patsh ve fullstack sayfaları aynı linki kullanıyordu butona tıklayınca yeni bir adresle oraya gitmesi için tekrardan bir route oluşturduk index element halinden hariç */}
          <Route path="fullstack" element={<FullStack />}></Route>
          <Route path="aws" element={<Aws />}></Route>
        </Route>

        <Route path="contact" element={<PrivateRouter />}>
          <Route path="" element={<Contact />} />

          {/* //! Absolute route ta burada normalde contact ın içinde contact araması gerekirken absolute route bunu engelledi çünkü nokta atışı yapıyoruz adreste. */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Route>

          <Route path="login" element={<Login />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        {/* //! Yanlış bir adres girildiğinde burada link, navigatevs gibi yöntemleri kullanamadığımız için burada Navigate componentini çağırdık */}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;

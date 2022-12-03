import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="* " element={<NotFound />} />

        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

//? React Router bir React Routing Library bir kütüphanedir. Sımple Page' dir.
//? Bir componenti her page de görünmesini istiyorsak BroserRouter ın içinde Routes un dışında olacak.

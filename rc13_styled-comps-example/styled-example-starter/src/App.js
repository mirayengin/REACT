import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import Main from "./components/Main";
import content from "./data";
import Footer from "./components/Footer";
import { BrowserRouter, Routes } from "react-router-dom";

//? ThemeProvider ı kullanmak için önce kullanacağımız componenti sarmallıyoruz bununla ve sonra oluşturduğumuz componenti (style) gönderiyoruz.
const style = {
  colors: {
    header: "#fff",
    body: "#fff",
    footer: "#8A1C4A",
  },

  margins: {},
  responsive: "768px",
};

const App = () => {
  return (
    <ThemeProvider theme={style}>
      <Header />
      {content.map((item) => {
        return <Main key={item.id} item={item} />;
      })}

      <Footer />

      {/* <BrowserRouter>
        <Routes>
          <Route path=""  elememt={<Footer />} />
        </Routes>
      </BrowserRouter> */}
    </ThemeProvider>
  );
};

export default App;

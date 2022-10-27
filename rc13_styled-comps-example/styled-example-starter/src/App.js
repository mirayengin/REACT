import Header from "./components/Header";
import { ThemeProvider } from "styled-components";


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
    </ThemeProvider>
  );
};

export default App;

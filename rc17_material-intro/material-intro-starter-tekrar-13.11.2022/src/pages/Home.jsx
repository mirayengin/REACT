import AppBarComp from "../components/AppBarComp";
import CardGrid from "../components/CardGrid";
import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";
import {createTheme, ThemeProvider  } from "@mui/material";
import { teal } from "@mui/material/colors";
import MakeStylesComp from "../components/MakeStylesComp";

const Home = () => {

  //? Burda theme de projede kullanmak için tenkler oluşturduk. Bunu yaparken MUI deki palette yi baz aldık. Theme ide oluştururken createTheme ve ThemeProvider ı import etmeliyiz ve theme i cretaeTheme ile oluştururuz.
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0bd75c",
        light: "#0bd75d7b",
        dark: "#0bd75d8", 

      },
      //?Burda biz secondary rengini değiştidik. Bu rengi bir object haline getirdik. Bunu yaparken bir teal rengini import ettik ve parantez içine renk ton rakamını yazdık. Projede secondry renk kullandığımız yerler bu yeni renk oldu
      secondary: {
        main: teal[500]
        
      }

    }
  })
  return (
    <ThemeProvider theme={theme}>
      <AppBarComp/>
      <TypoButtons />
      <MakeStylesComp/>
      <TextFieldComp />
      <CardGrid/>
    </ThemeProvider>
  );
};

export default Home;

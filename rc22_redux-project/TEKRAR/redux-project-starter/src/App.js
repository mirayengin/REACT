import { Provider } from "react-redux";
import { store } from "./app/store";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    //! redux tookit için burda Provider property si ile sarmallıyoruz ve store u ilgili yerde kullanmak için
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;


//! react-toolkitte type ve reducerler ın oluştuğu yer features klasörü içindeki slice dosyalarıdır. 
//? store ise app klasörü içindedir.
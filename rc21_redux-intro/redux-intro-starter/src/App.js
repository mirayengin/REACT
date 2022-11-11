import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
// import { createStore } from "redux"
import { Provider } from "react-redux";
import { store } from "./redux";

// import counterReducer from "./redux/reducers/counterReducer";
// import reducer from "./redux";
//? Bu şekilde de import edilebilir(createStore).
// import { legacy_createStore as createStore} from 'redux'

function App() {

  

  //! Burada bir store oluşturmalıyız redux için bunuda (createStore) ile yapıyoruz
// const store = createStore(counterReducer)
  return (
    <div className="app">
    {/* // Burada provide ile store umuzu göndeeceğimiz yerleri sarmallıyoruz. */}
    <Provider store={store}>
      <Counter />
      <Todo />

    </Provider>
    </div>
  );
}

export default App;














//! REDUX = Global stagement library(Durum yönetim kütüphanesi)(Third party)
//?State sayısı fazla ise kullanmak mantıklı, büyük projelerde kullanmak mantıklı
//!Redux Flux veElm kütüphanelerinden esinlenerek yapılmıştır
//! reducer ve contex Apı birleşimi (Redux nerdeyse)
//? yarn add redux react-redux
 //! Pure function = düz sade javascript fonk





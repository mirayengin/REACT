import "./App.css";
// import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
//? Store oluştururken import ediyoruz
// import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { store } from "./redux";
// import reducer from "./redux";


function App() {
  //! Store oluşturduk(Biz reducerları birleştirdiğimizden dolayı bu store da değil datalar)
  // const store = createStore(reducer);




  return (
    <div className="app">
      {/* //? Burada artık biz provider ile sarmallıyoruz. ve value prop ile store u gönderiyoruz */}
      <Provider store ={store}>
        {/* <Counter /> */}
      <Todo />
      </Provider>
    </div>
  );
}

export default App;

//! Redux global state management kütüphanesi, tek elden stateleri kkontrol edebiliyoruz.
//!Global yönetim kütüphanesi
//? Pur func düz sade basit fonk

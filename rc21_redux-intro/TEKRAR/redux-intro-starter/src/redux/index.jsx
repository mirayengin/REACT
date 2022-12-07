// import { CLEAR, DECREMENT, INCREMENT } from "./types/counterType";

// const initialState = {
//   counter: 0
// }

// //? Redux da başlangıc değeri olarak alsın diye state e default değer veriyoruz.
// // const reducer = (state=initialState, action) => {
// const reducer = (state=initialState, {type,payload}) => {
//   switch (type) {
//     case INCREMENT:
//       return { counter: state.counter + 1 };
//     case DECREMENT:
//       return { counter: state.counter - 1 };
//     case CLEAR:
//       // return {counter: 0}
//       return initialState;
  
//     default:
//       return state;
//     //! Default kısmını boş bırakamıyoruz çünkü illki bideğer döndürmesi gerekiyor.
//   }
// }

// export default reducer;

//!Burda storeumz tek lduğu için reducerları birleştirme işlemi yapıyoruz.O yüzden buraya hepsini import ettik
import { legacy_createStore as createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import { todoReducer } from "./reducers/todoReducer";

///! CombineReducer reducer ları birleştiren metoddur.
const rootReducer = combineReducers({
  count: counterReducer,
  todo: todoReducer,
})


//? Bütün stateleri bir elden kontrol için ve bizim redux da zaten bir tane store umuz olduğu için reducer ları birleştirdik ve oluşturduğumuz store a birleştirdiğimiz reducerları  rootReducer adı vererek gönderdik.

export const store = createStore(rootReducer)
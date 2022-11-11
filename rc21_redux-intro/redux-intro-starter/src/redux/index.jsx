//! Herhangi bir alt klosörde index dosyası açılırsa çağırılırken sadece index dosyasının içinde bulunduğu dosya ismini yazmak yeterli

//? Redux da state lere bir initial değeri vermeliyiz ve bunun ismine initialState diyebiliriz.
// const initialState = {
//   counter: 0,
// };

// const reducer = (state, action) => {
//?state ilk değer olarak initialState değer olarakta verielbilir.
// const reducer = (state=initialState, {type,payload}) => {
//   //? reducer burada action nın durumuna göre değişiklik neyse ona karar veriyor
//   // switch (action.type) {
//   //! action destruc ettik
//   switch (type) {
//     //? Burada dispatchler ne state yi değiştiren onları yazdık
//     //? Değeri değişmeyen değişkenler (CONSTANT) tır ve büyük harfle yazılır.
//     //! Burada biz state parametresi içindeki counter  bilgisini kullanıyoruz o yüzden burda state.counter demeliyiz yoksaki data ya erişemeyiz
//     case "INCREMENT":
//       return {counter: state.counter + 1}
//     case "DECREMENT":
//       return {counter: state.counter - 1};
//     case "CLEAR":
//       return initialState;

//     default:
//       return state;
//     //! Reduser da illaki bir değerin dönmesi gerekiyor o yüzden bu default kısmının boş bırakılmaması lazım bir değişiklik yoksa bile state ın normal değeri döndürülmeli
//   }
// };

// export default reducer;

//! Bizim bir store umuz olduğu içi burada reducer ları burada birleştiriyoruz.

import { legacy_createStore as createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

//! combineRedusers ile tek store olduğu için  oluşturduğumuz reducerları birleştiriyoruz.
//? combineredusuers bir obje aldığı için bu reducerları birer keylere atadık.

const rootReducer = combineReducers({ count: counterReducer, todo: todoReducer });



export const store = createStore(rootReduser);

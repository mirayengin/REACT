import { CLEAR, DECREMENT, INCREMENT } from "../types/counterType";

const initialState = {
  counter: 0
}

//? Redux da başlangıc değeri olarak alsın diye state e default değer veriyoruz.Vermezsek hata veriyor.
// const reducer = (state=initialState, action) => {
const counterReducer = (state=initialState, {type,payload}) => {
  switch (type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    case DECREMENT:
      return { counter: state.counter - 1 };
    case CLEAR:
      // return {counter: 0}
      return initialState;
  
    default:
      return state;
    //! Default kısmını boş bırakamıyoruz çünkü illki bideğer döndürmesi gerekiyor. 
  }
}

export default counterReducer; 
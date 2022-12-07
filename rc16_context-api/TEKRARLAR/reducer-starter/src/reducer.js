export const initialState = {
  loading: false,
  catImage: "",
  error: "",
};

//! Action da stateleri ne zaman güncellenecekse o durumları yazıyoruz.
export const reducer = (state, action) => {
  //? Action un type ına baktı burda ona göre işlem yapacak
  switch (action.type) {
    case "START":
      //? UseReducerExample fonksiyonunda
      return { ...state, loading: true, catImage: "", error: "" };
    case "SUCCESS":
      return { ...state, catImage: action.payload, error: "", loading: false };
      
      case "FAIL":
      return { ...state, catImage: "", error: action.payload, loading: false };
    

    default:
      break;
  }
};

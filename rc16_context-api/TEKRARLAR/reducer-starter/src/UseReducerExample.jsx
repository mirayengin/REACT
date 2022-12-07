import { useReducer} from "react";
// import { useReducer, useState } from "react";
import { initialState, reducer } from "./reducer";

const UseReducerExample = () => {
  // const [catImage, setCatImage] = useState("");
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  //? reducer componentinde yukarıdaki statelerin initial değerlerini verdiğimiz ve onları reducer içinde action lar ile güncelleyeceğimiz için burada pasif hale getirdik. Güncelleme içinde buraya recuder hook içindeki stateleri güncelleme için aşağıdaki yapıyı import ettik.

  //! reducer hook u iki parmetre alır bunlar reducer componentinde yazdığımız reducer ve statelerin ilk değerlerini içeren initialState i alır.
  const [state, dispatch] = useReducer(reducer, initialState)
  const { loading, error, catImage } = state;

  const getCatImage = async () => {
    const url = "https://api.thecatapi.com/v1/images/search";
    //! Bu setLoading gerek kalmadı çünkü artık dispatch le bunu yapacaz
    // setLoading(true);
    //! Biz reducer da action type larını yazdık ve gelen type a göre hangi stateleri güncelleyeceklerini söyledik bu dispatch ilede biz buradaki işleme göre type ını gönderiyoruz ve stateleri güncellemeyi sağlıyoruz.
    dispatch({type:"START"})
    try {
      const res = await fetch(url);
      const data = await res.json();
      
      // setCatImage(data[0].url);
      // setError("");
      //! İşlem başarılı olunca bir data elde ediyoruz ve onu biz state e gönderiyoruz işte bu göndermeyide biz payload ile yapıyoruz.
      dispatch({ type: "SUCCESS", payload:data[0].url })
      
    } catch (error) {
      // setError("DATA CAN NOT BE FETCHED");
      // setCatImage("");

      dispatch({ type: "FAIL", payload:"DATA CAN NOT BE FETCHED" })


    }
    // finally {
    //   setLoading(false);
    // }
  };
  // console.log(error);
  // console.log(catImage);

  return (
    <div>
      <button
        onClick={getCatImage}
        disabled={loading}
        style={{ display: "block", margin: "1rem" }}
      >
        Get Cat Image
      </button>
      {error && <h2>{error}</h2>}
      {catImage && <img width="50%" src={catImage } alt="img" />}
    </div>
  );
};

export default UseReducerExample;

import { useDispatch, useSelector } from "react-redux";
import { clear, decrement, increment } from "../../redux/actions/counterAction";
import "./Counter.css";


const Counter = () => {
  const dispatch = useDispatch();

  //! useSelector ile oluşan action ı ve counter değişkenine atadık.Yani burda action ı tükettik (kullandık)
  const counter = useSelector((state) => state.count.counter)
  //?Yukarıdaki dectruc edilmemiş hali
  //! useSelector global hook a direkt ulaşabiliyor.
  // const {counter} = useSelector((state) => state)
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{counter}</h1>
      <div>
        {/* BURADA DİSPATCH LERLE STORE U NASIL DEĞİŞTİRECEĞİMİZİ GÖNDERDİK */}
        <button className="counter-button positive" onClick={() => dispatch(increment())}>increase</button>
        <button className="counter-button zero" onClick={() => dispatch(clear())}>reset</button>
        <button className="counter-button negative" onClick={() => dispatch(decrement())}>decrease</button>
      </div>
    </div>
  );
};

export default Counter;

//! UI kısmı state i değiştiren kullanıcıyla etkileşim olan yer
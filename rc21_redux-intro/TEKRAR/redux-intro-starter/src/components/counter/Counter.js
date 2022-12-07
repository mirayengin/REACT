import { useDispatch, useSelector } from "react-redux";
import { clear, decrement, increment } from "../../redux/actions/counterAction";
import "./Counter.css";

const Counter = () => {
  //? Bununla actionları  yayıyoruz ve statelerin değişmesini sağlıyoruz.
  const dispatch = useDispatch();
  //? useSelector ile biz burda consuming yapıyoruz.
  // const counter = useSelector((state) => state.counter)

  //! Bu storeları biz bir storeda index.jsx içinde birleştirdik ve nested bir yapı oluştu bu yüzden aşağıdaski gibi bir erişim yolu yazmalıyız.
  // const counter = useSelector((state) => state.count.counter)
  const { counter } = useSelector((state) => state.count);

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{counter} </h1>
      <div>
        {/* //! Dispatch in içindekileri bir fonk gibi yazdık. Bunuda actions içinde yzık yeni bir component oluşturarak */}
        <button className="counter-button positive" onClick={() => dispatch(increment())}>increase</button>
        <button className="counter-button zero" onClick={() => dispatch(clear())} >reset</button>
        <button className="counter-button negative" onClick={() => dispatch(decrement())} >decrease</button>
      </div>
    </div>
  );
};

export default Counter;

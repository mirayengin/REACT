
import Events from "./components/1-events/Events";
import Counter from "./components/2-classComponent/Counter";
import UseStateCounter from "./components/3-useStateHook/UseStateCounter";


function App() {
  return (
    <div>
      <h1>EVENTS</h1>
      <Events/>
      <Counter/>
      <Counter count={5} />
      <UseStateCounter/>
    </div>
  );
}
export default App;

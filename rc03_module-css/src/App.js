import Card from "./components/card/Card";
import data from "./util/data";

function App() {
  return (
    <>
      {/* <Card data={data} /> */}
      {data.map((item) => {
        const {id, language, btnName, img} = item;
        console.log(item);
        return (
          <Card key={id} language={language} img={img} btn={btnName} />
        )
      })}
    </>
  )
}

export default App;


//? return içi JSX alanı bu yüzden süslü kullanılmalıdır. JS komutlarını yazarken.
//! Card a dğerlei gönderdik.






























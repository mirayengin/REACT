// import React from "react";

// function App() {
//   return (
//     <div>
//       <Msg/>
//     </div>
//   );
// }

// export default App;

//!props larla berbaber => string , intager, function, object... gönderebiliriz

import React from "react";
// import Msg from "./components/Msg";
import Person from "./components/Person";

import Data from "./data";

function App() {
  return (
    <div>
      {/* <Msg name="Felix" /> */}
      {/* <Person/> */}
      {/* <Person name={Data[0].name} img={Data[0].img} tel={Data[0].tel}/>
      <Person name={Data[1].name} img={Data[1].img} tel={Data[1].tel}/>
      <Person name={Data[2].name} img={Data[2].img} tel={Data[2].tel}/> */}

      {/* {Data.map((person) => {
        return <Person name={person.name} img={person.img} tel={person.tel} />;
      })} */}
      {Data.map((person) => {
        return (
          <Person
            key={person.name}
            name={person.name}
            img={person.img}
            tel={person.tel}
          />
        ); //! React unig bir değer yani key ister performance için
      })}
    </div>
  );
}

export default App;

// const Person = () => {
//     return (
//         <div>
//             <p>Merhaba Felix</p>
//             <img src="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg" alt="img1" />
//             <p>55555555</p>
//         </div>

//     )
// }

import Msg from "./Msg";

const Person = (props) => {
  const { name, img, tel } = props;
  return (
    <div style={{ textAlign: "center" }}>
      <Msg name={name} />
      <img style={{ width: "200px" }} src={img} alt="img1" />
      <p>{tel}</p>
    </div>
  );
};

export default Person;
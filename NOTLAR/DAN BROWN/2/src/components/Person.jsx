//////////////////////////////////////////////////// 1.
// const Person = () => {
//   return (
//     <div>
//       <p>Merhabalar Vatan</p>
//       <img
//         src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg"
//         alt="img1"
//       />
//       <p>0414 6363 63 63</p>
//     </div>
//   );
// };
// export default Person;

import Msg from "./Msg";

//////////////////////////////////////////////////// 2.
const Person = (props) => {
  const { name, img, tel } = props;
  return (
    <div>
      <Msg name={name} />
      <img src={img} alt="img1" />
      <p>{tel}</p>
    </div>
  );
};
export default Person;

//1.kısımda statıc sekılde ana parentten props alıp kullandık. 2. kısımda ıse ana parentten bırden fazla props cekıp kullanmak ıcın destractıon yontemıyle bunları kullandık.
//!yolumuz---> App ana parent... oraya data.js yı ımport ettık. onun verılerını name ımg ve tel keylerıne value olacak sekılde cektık-kullandık. bı object halındekı bu bılgıyı-verı de buraya cektık. burada kullandık... bu bu ısın en amele halıydı (Felix hocadan:)
//app--->persona verı gonderdık. sımdı de persondan ----> msg ye verı gonderebılırız. onu da "<p>Merhabalar {name}</p>"etıketını kaldırıp dırekt olarak msg name props olarak gonderebılırız. burdan gonderecegız msgden de bu propsu yakalıyoruz...tabımı msgyı buraya ımport etmelıyız yoksa aradakı ıletısımı kuaramyız.

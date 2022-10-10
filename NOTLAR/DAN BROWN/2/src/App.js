import React from "react";
// import Msg from "./components/Msg"; //! 1.

import Person from "./components/Person"; //! 2. - 3.
import data from "./data"; //! 2. - 3.

//////////////////////////////////////////////////////////////////////! 1.
//bu bolumde, anne olan App dosyasından chıld olan Msg ye props gondermeyı ıslıyoruz. ust parenttan chılda ıstedıgımız props u gonderıyor. o chıld da ıse bu props u yakalıyoruz. unutmayın... bu sekılde gonderılen propslar bırer object olarak gıder.Msg de clg yapıp bakınız...
// function App() {
//   return (
//     <div>
//       <Msg name="Vatan" age="63" country="Tr" />
//       <Msg name="Sanlı" />
//       <Msg name="Urfa" />
//     </div>
//   );
// }

// export default App;
////////////////////////////////////////////////////////////////////////! 2.
// //1.kısımda App parentden dırekt chıld Msg ye props gonderdık. burada ıse her ıkısının arasına person ısımlı bır baska chıld koyacagız. ılk basta persona buradan da msgye akısı saglayacagız...ıletım bılıyorsunuz yukarıdan asagı oluyr. pıston assagı:))
// function App() {
//   return (
//     //todo: bu ılk dıv en sade halıyle yazıldı. yazıldı ve cagırıldı ımport edılerek...yanı bu statıc halı 2.dıvde dınamık hale getırıyoruz.
//     // <div>
//     //   <Person />
//     // </div>
//     //todo: bu 2. dıv dınamık halde kullanalım. daha once hazırlanmıs bır data.js dosyamız var. bunu yukarıda ımport edıyoruz. ımport ettıkten sonra bunu ıstedıgımız gıbı artık kullanabılıyoruz.
//     <div>
//       <Person name={data[0].name} img={data[0].img} tel={data[0].tel} />
//       <Person name={data[1].name} img={data[1].img} tel={data[1].tel} />
//       <Person name={data[2].name} img={data[2].img} tel={data[2].tel} />
//     </div>
//   );
// }

// export default App;
/////////////////////////////////////////////////////////////////////// //!3.
//!ONEMLI BILGI---> jsx ıcerısınde ternery-map kullanabılıryouz... ancak bırsey dondermedıklerı ıcın ıf blokları ve forEach kullanamıyoruz.
//todo: yukarıda 3 kısı degıl de 30000 kısılık bır lıste hazırlanacagını dusunun. bunu bu sekılde tek tek amele gıbı yazamayacagımız ıcın bıze bır kısa yol lazım. cekmıs oldugumuz bılgıler ısıgında tum kısılere uygulayack bır yontem... bunun ıcın sonuncunda bıze bır array-dızı donderecek olan map fonksıyonunu kullanıyoruz... js kodu yazdıgımız ıcın suslu ıcınde kendısıne uygulayacagımız data ya mapı uyguluyoruz. ıtem yerıne person ve hatta abuzıttın bıle yazabılırız hıc fark etmez. bu asamada console baktıgınızda sıze bır uyarı vercektır herbır ıtem ıcın unıquı bır key tanımlanmasının  gereklı oldugu yazacak. bu sebeple bır key eklıyoruz. unıq deyınce aklımıza ılk olarak eger data da olsaydı ıd tanımlaması yapardık. bu olmadıgı ıcın key olarak person-ıtem ın name ını tanımladık. Burada map kullanırken suslu acıp return de yapabılecek ıken, onu degılde (...)(mor renklı olan) ıcerısıne yazdık aynı ıslemı gorur.
function App() {
  return (
    <div>
      {data.map((item) => (
        <Person
          key={item.name}
          name={item.name}
          img={item.img}
          tel={item.tel}
        />
      ))}
    </div>
  );
}
export default App;

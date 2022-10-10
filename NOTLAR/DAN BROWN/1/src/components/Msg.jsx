///////////////////////////////////////////////////////////////////////////////// //!1.Yontem
// const Msg = (props) => {
// //   console.log("props :>> ", props);
//   return (
//     <h3>
//       Merhaba {props.name} --- {props.age}
//     </h3>
//   );
// };
// export default Msg;
///////////////////////////////////////////////////////////////////////////////// //!2.Yontem
// const Msg = (props) => {
//   const { name, age, country } = props;
//   return (
//     <h3>
//       Merhaba {name} ve {age} ve {country}
//     </h3>
//   );
// };
// export default Msg;
///////////////////////////////////////////////////////////////////////////////// //!3.Yontem
const Msg = ({ name, age, country }) => {
  return (
    <h3>
      Merhaba {name} ve {age} ve {country}
    </h3>
  );
};
export default Msg;
//normalde yazdıgımız tag ekrana yansıyacaktır. eger parenttan bır props gonderılmıs ıse bızım burada o propsu yakalamamız gerekıyor. base practıse de (props) olarak yazılır ama sız ıstedıgınız ısımde bu gonderılen propsu yakalayabılır ve onu calıstırabılırsınız-kullanabılırsınız. bunu bırıncı halde oldugu gıbı de kullanabılırız ama 2. halde olan Destructıon yontemıyle yazıp da kullanabılırsınız. 13.satırda oldugu gıbı yazılır asagıda props.... yazmaya gerek yok dırekt sadece key yazılır...3. yontem olarak da bunu yolda destıract edebılırızı.  parametrenın ıcerısıne suslu ıcınde yakaladıgım propsu yakalarak da yazabılırım...bana gore en guzelı ve anlasılırı ıkıncı yontemdır.

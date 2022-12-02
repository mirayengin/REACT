import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState([]); //! Api de veriler array olarak olduğu için bizde array ın içine koyduk

  const url = "https://axios-example-cw.herokuapp.com/api/tutorials";

  //? CRUD: (GET-READ)
  // ! burada apiden veri çektik axios ile
  const getTutorials = async () => {
    //! data çekmede hata olursa görmek için bunu kullandık
    try {
      //! burada veri desctructer yaptık
      const  {data}  = await axios(url); //! otomatik json yapısına çevirir.
      setTutorials(data);
    } catch (error) {
      console.log(error)
    }
  };

  //! Burada sadece birkez veri çekilmesini sağladık yani bu fonk. [] yaparak bu fonk didmount olarak çalışmasını sağladık
  useEffect(() => {
    getTutorials();
  }, []);

  // getTutorials() //! burada state olsaydı uygulama sonsuz döngüye girerdi

  return (
    <>
      <AddTutorial getTutorials={getTutorials} /> {/*// bunu tutorials da render etmek için ekledikten sonra */}
      <TutorialList tutor={tutorials} getTutorials={getTutorials} />{/*// ender için state yada props güncellenmesi gerekir bu yüzden buraya gönderiyoruz */}
    </>
  );
};

export default Home;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const People = () => {
  // !Bu useNavigate yönlendirme için bir link oluşturur.
  const navigate = useNavigate();
  const [people, setPeople] = useState([]);

  const getPeople = () => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setPeople(data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPeople();
  }, []);

  
  return (
    <div className="container text-center mt-4">
      <h1>PEOPLE LIST</h1>
      <div className="row justify-content-center g-3">
        {people?.map((person) => {
          const { id, first_name, last_name, avatar } = person;
          //!Buradaki id yi kullandık.
          return (
            <div
              key={id}
              className=" col-sm-12 col-md-6 col-lg-4"
              type="button"
              // {/* Tıklanıldığında person un altındaki tıklanılan yere git Resimler burada basıldı ve kaynak burası o yüzden onClick buraya verildi.*/}
              //navigate içinde state key ile tıklanılan person nın bütün bilgilerini yönlendirilen page e gönderiyoruz.
              // onClick={() => navigate(`/people/${id}`, {state:person})} 
              // {/*Tıklanıldığında git demek için verdik.*/}
              onClick={() => navigate(`/people/${id}`)} 
            >
              <img className="rounded" src={avatar} alt="img" />
              <h6>
                {first_name} {last_name}
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default People;

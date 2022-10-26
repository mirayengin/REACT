import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

const PersonDetail = () => {
  //! useNavigate hook ile gönderilen id yi burada useParams hook ile yakalıyoruz.
  const { id } = useParams();
  console.log(id);

  //! Navigate ile gönderilen state key i altındaki bütün bilgileri useLocation ile yakalayabiliyoruz.
  //! Bu state ile gönderile bilgiler bu sayfada ne göstereceksek onu seçmemiz için buraya getirdik ve içinden seçeçez.
  // const { state } = useLocation();
  // const { state:person } = useLocation();
  // console.log(person);

  const navigate = useNavigate();

  const [person, setPerson] = useState("");
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)




  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        if (res.ok) {
          setError(true)
          setLoading(false)
          throw new Error("Something went wrong");
        }
        
        return res.json();
      })
      .then((data) => {
        setLoading(false)
        setPerson(data.data)
      })
      .catch((err) => console.log(err));
  }, []);

  // ! useEffect kullanılmalı
  // const getPerson = () => {
  //   fetch(`https://reqres.in/api/users/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setPerson(data.data))
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   getPerson();
  // }, []);

  if (error) {
    return <NotFound />
  }
  
  if (loading) { //! burada ilk personda data gelmeden boş string var ve bu değişene kadar loading yazısı yazdırmak istiyoruz.
    <h3 className="text-center">Data Loading</h3> 
  }
  

  //? error ve loading yoksa return u yazdır.
  if (!error && !loading) {
    return (

      <div className="container text-center">
        <h3>
          {person?.first_name} {person?.last_name}
        </h3>
        <img className="rounded" src={person.avatar} alt="" />
        {/* Optinal chaning kullandık burda */}
        <p>{person?.email}</p>
        <div>
          <button onClick={() => navigate("/")} className="btn btn-success me-2">
            Go Home
          </button>
          {/* {//Bir geri gider browser history e göre*/}
          <button onClick={() => navigate(-1)} className="btn btn-warning">
            Go Back
          </button>
        </div>
      </div>
    );
  }
};

export default PersonDetail;

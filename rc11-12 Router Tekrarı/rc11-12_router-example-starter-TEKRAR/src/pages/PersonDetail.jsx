import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const PersonDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  console.log(id)
  const [person, setPerson] = useState("")

  // const getPerson = () => {
  //   fetch(`https://reqres.in/api/users/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setPerson(data.data))
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   getPerson();
  // }, []);


  useEffect(() => {
        fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setPerson(data.data))
      .catch((err) => console.log(err));
  }, []);


  // const { state: person } = useLocation();
  // const {state} = useLocation()
  // console.log(person);
  const {  email, last_name, first_name, avatar } = person;
  return (
    <div className="container text-center">
      <h3>
        {first_name} {last_name}{" "}
      </h3>
      <img className="rounded" src={avatar} alt="" />
      <p>{email}</p>
      <div>
        <button className="btn btn-success me-2" onClick={() => navigate("/")} >Home</button>
        <button className="btn btn-warning" onClick={() => navigate(-1)} >Go Back</button>
      </div>
    </div>
  );
};

export default PersonDetail;

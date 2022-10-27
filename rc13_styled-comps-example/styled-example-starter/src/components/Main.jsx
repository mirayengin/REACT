import React from "react";
import Card from "../styles/Card.Styled";
import MainFoto from "../styles/Picture.Styled";

const Main = ({ item }) => {
  const { id, body, image, title } = item;
  console.log(title);

  console.log(item);
  return (
    <Card id={id}>
      <div>
        <MainFoto id={id} src={`./images/${image}`} />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </Card>
  );
};

export default Main;

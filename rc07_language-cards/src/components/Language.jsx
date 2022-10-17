import { useState } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const Language = ({ name, img, options }) => {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <Container
      onClick={() => setShowDesc(!showDesc)}
      style={{ background: "peachpuff" }}
      className="p-4 h-100 rounded-2 lang-card"
    >
      {!showDesc && (
        <Container>
          <Image className="img-logo" src={img} width="70%"></Image>
          <h3 className="display-6">{name}</h3>
        </Container>

      )}  
      

      {showDesc && (
        <ol className="h-100 d-flex flex-column justify-content-center">
      {options.map((item) => {
        return <li className="h5 text-start">{item}</li>;
      })}
    </ol>

      )}    
      


    </Container>
  );
};

export default Language;

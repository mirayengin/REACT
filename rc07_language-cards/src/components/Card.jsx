import Language from "./Language";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { data } from "../helpers/data";

const Card = () => {
  return (
    <Container className="rounded-4 mt-4 p-4" style={{ background: "#F48B29" }}>
      <h1 className="text-white my-4">Languages</h1>
      <Row className="g-3 justify-contant-center">
      {data.map((lang, index) => {
        return (
          <Col  key={index} sx={12} sm={6} md={4} lg={3} >
            <Language  {...lang} />
            {/* // <Language lang={lang} /> */}
          </Col>
        );
      })}
      </Row>
    </Container>
  );
};

export default Card;

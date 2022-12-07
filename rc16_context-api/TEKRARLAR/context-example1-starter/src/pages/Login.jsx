// import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  //! Login State
  // const [user, setUser] = useState({ email: "", password: "" });

  //! Consuming-LoginContext
  const {user, setUser} = useContext(LoginContext)

  const handleSubmit = (e) => {
    e.preventDefault();

    //! Giriş yapılmadan login sayfasına geciş yapılmış olabilir bu yüzden bir önceki people sayfası olduğu için -1 yaptık navigate ile
    navigate(-1)
  };

  return (
    <Container>
      <h1 className="text-center mt-4">LOGIN PAGE</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            //! Bunu ilk başta defined geldiği için yaptık. Çünkü value kullandığınızda ilk başta kesinlikle undefined olmamalı değeri
            value={user?.email || ""}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={user?.password || ""}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>
        <Container className="text-center">
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default Login;

import { Button, TomatoButton } from "./components/Button.Styled";
import Container from "./components/Container.Styled";
import Header from "./components/Header.Styled";
import StyledLink from "./components/Lİnk.Styled";

const App = () => {
  return (
    <>
      <Container bg="green">
        <Header color="red">STYLED COMPONENT</Header>
        {/* <Button primary={primary}>Click</Button> */}
        {/* // İki şekildede yazılır. */}
        <Button primary>Save</Button>
        <Button>Clear</Button>
        <TomatoButton>Send</TomatoButton>
        <TomatoButton primary>Submit</TomatoButton>
      </Container>

      <Container bg="#555">
        <StyledLink href="https://clarusway.com/" target="blank">Clarusway</StyledLink>

        <StyledLink secondary href="https://reactjs.org/" target="blank">React</StyledLink>

      </Container>
    </>
  );
};

export default App;

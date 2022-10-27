import React from "react";
import Button from "../styles/Button.Styled";
import Flex from "../styles/Flex.Styled";
import StyledHeader, { Image, Logo, Nav } from "../styles/Header.Styled";

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Logo src="./images/logo.png" />
        <div>
          <Button color="#A62440">Apply Courses</Button>
          <Button bg="#A62440">Talk To Adviser</Button>
        </div>
      </Nav>

      <Flex>
        <div>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi hic
            veritatis quae ducimus sed aliquid dolores quo iste nostrum non!
          </p>
          <Button bg="#A62440">Start Your New Carier</Button>
        </div>

        <Image src="./images/hero.jpg"/>
      </Flex>
    </StyledHeader>
  );
};

export default Header;

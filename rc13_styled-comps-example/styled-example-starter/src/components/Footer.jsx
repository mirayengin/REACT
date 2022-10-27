import React from "react";
import FooterStyled from "../styles/Footer.Styled";
import FooterImage from "../styles/FooterFoto.Styled";
import FooterMain from "../styles/FooterMain.Styled";
import {BsLinkedin} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {FaFacebook} from "react-icons/fa"
import { Facebook, Linkedin, Twitter } from "../styles/İkon.Styled";
import {Link} from "react-router-dom"

const Footer = () => {
// const navigate = useNavigate()

  return (
    <FooterStyled>
      <FooterImage src="./images/logo.png" />
      <FooterMain>
        <div>
          <p>
            1775 Tysons Blvd. 5th Floor. <br /> Tysons, VA 22102
          </p>
          <p>+1 (571) 360 66 77</p>
          <p>contact@clarusway.com</p>
        </div>

        <div>
          <p>About Us</p>
          <p>What We Do</p>
          <p>FAQ</p>
        </div>

        <div>
          <p>Career</p>
          <p>Blog</p>
          <p>Contact Us</p>
        </div>

        <div>

          {/* <Link to="http://facebook.com" > <FaFacebook /> </Link> */}
          <Facebook href="http://facebook.com" > <FaFacebook /> </Facebook>
          {/* <Link to="https://twitter.com/">  <AiFillTwitterCircle /> </Link> */}
          <Twitter href="https://twitter.com/">  <AiFillTwitterCircle /> </Twitter>
          {/* <Link to="https://linkedin.com/"> <BsLinkedin /> </Link>         */}
          <Linkedin href="https://linkedin.com/"> <BsLinkedin /> </Linkedin>        
          
        </div>
      </FooterMain>
    </FooterStyled>
  );
};

export default Footer;

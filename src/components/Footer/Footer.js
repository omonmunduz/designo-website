import styled from "styled-components";
import { Link } from "@reach/router";
import facebookIcon from "../../images/shared/desktop/icon-facebook.svg";
import instaIcon from "../../images/shared/desktop/icon-instagram.svg";
import pinterestIcon from "../../images/shared/desktop/icon-pinterest.svg";
import twitterIcon from "../../images/shared/desktop/icon-twitter.svg";
import youtubeIcon from "../../images/shared/desktop/icon-youtube.svg";

const GetInTouch = styled.section`
  width: 85%;
  padding: 1.5rem;
  background-color: #e7816b;
  border: 1px solid #e7816b;
  border-radius: 10px;
  margin: 0 auto;
  text-align: center;
  color: #fff;
  transform: translateY(-100px);
`;
const GetInTouchBtn = styled.button`
  color: red;
  margin: 2rem;
  padding: 0.75rem;
  outline: none;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 1rem;
  &:hover {
    background-color: #FFAD9B;
  }
`;
const Heading = styled.h4`
  color: #fff;
  margin-bottom: 2rem;
`;
const MainFooter = styled.footer`
  width: 100%;
  margin-top: 200px;
  background-color: #1d1c1e;
  text-align: center;
  padding-bottom: 1.5rem;
`;
const Line = styled.hr`
  color: #fff;
  font-weight: bold;
  width: 90%;
  margin: 0 auto;
`;
const GoTo = styled.h5`
  color: #fff;
  margin: 10px;
  &:hover {
    color: #e7816b;
  }
`;
const ContactDetails = styled.div`
  width: 70%;
  color: #f1f3f5;
  margin: 1rem auto;
`;
const Icons = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  margin: 2rem auto;
`;

const Footer = () => {
  return (
    <MainFooter>
      <GetInTouch>
        <Heading>Let’s talk about your project</Heading>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
        <GetInTouchBtn>
          <Link to="/contact" style={{ color: "#1D1C1E" }}>
            Get in touch
          </Link>
        </GetInTouchBtn>
      </GetInTouch>
      <h1 style={{ color: "#fff" }}>Designo</h1>
      <Line />
      <ul>
        <Link to="/">
          <GoTo>Home</GoTo>
        </Link>
        <Link to="/about">
          <GoTo>About</GoTo>
        </Link>
        <Link to="/locations">
          <GoTo>Locations</GoTo>
        </Link>
        <Link to="/contact">
          <GoTo>Contact</GoTo>
        </Link>
      </ul>
      <ContactDetails>
        Designo Central Office 3886 Wellington Street Toronto, Ontario M9C 3J5
      </ContactDetails>
      <ContactDetails>
        Contact Us (Central Office) P : +1 253-863-8967 M : contact@designo.co
      </ContactDetails>
      <Icons>
        <img src={facebookIcon} alt="facebook icon" />
        <img src={instaIcon} alt="instagram icon" />
        <img src={pinterestIcon} alt="pinterest icon" />
        <img src={twitterIcon} alt=" twitter icon" />
        <img src={youtubeIcon} alt="youtube icon" />
      </Icons>
    </MainFooter>
  );
};
export default Footer;

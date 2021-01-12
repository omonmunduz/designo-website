import styled from "styled-components";
import PhoneImg from "../../images/home/desktop/image-hero-phone.png";

const TextContainer = styled.div`
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
  @media (min-width: 1025px) {
    width: 50%;
  }
`;
const HeroSection = styled.section`
  background-color: #e7816b;
  padding: 1.4rem;
  color: #fff;
  @media (min-width: 550px) {
    width: 90%;
    margin: auto;
    border-radius: 10px;
  }
  @media (min-width: 1025px) {
    display: flex;
  }
`;
const PhoneImage = styled.img`
  width: 100%;
  max-width: 500px;
  margin: -5rem auto -10rem auto;
  position: relative;
  text-align: center;
`;
const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  text-align: center;
  @media (min-width: 1025px) {
    width: 50%;
  }
`;
const Title = styled.h4`
  display: inline-block;
  padding: 1em;
  max-width: 500px;
  margin-bottom: 1rem;
`;
const Para = styled.p`
  display: inline-block;
  paddinng: 1em;
  max-width: 500px;
`;

const Hero = () => {
  return (
    <HeroSection>
      <TextContainer>
        <Title>
          Award-winning custom designs and digital branding solutions
        </Title>
        <Para>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </Para>
      </TextContainer>
      <ImgContainer>
        <PhoneImage src={PhoneImg} alt="phone" />
      </ImgContainer>
    </HeroSection>
  );
};
export default Hero;

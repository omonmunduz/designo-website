import styled from 'styled-components';
import PhoneImg from '../../images/home/desktop/image-hero-phone.png';

const TextContainer = styled.div`
  width: 90%;
  padding: 8px;
  margin: 1rem auto;
  text-align: center;
`;
const HeroSection = styled.section`
  background-color: #E7816B;
  padding: 1.4rem;
  color:#fff;
`;
const PhoneImage = styled.img`
  width: 100%;
  margin: -5rem 0 -10rem 0;
`;

const Hero = () => {
    return(
        <Hero>
        <TextContainer>
        <h4>Award-winning custom designs and digital branding solutions</h4>
        <p style={{margin:'2rem auto 2rem auto'}}>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, 
and engaging brand experiences. Find out more about our services.</p>
        </TextContainer>
        <PhoneImage src={PhoneImg} alt="phone" />
      </Hero>
    )

};
export default Hero;
import styled from "styled-components";
import { Link } from "@reach/router";
import imgWeb from "../../images/home/desktop/image-web-design-small.jpg";
import imgApp from "../../images/home/desktop/image-app-design.jpg";
import imgGraph from "../../images/home/desktop/image-graphic-design.jpg";

const Wrapper = styled.section`
  width: 90%;
  margin: 3rem auto 3rem auto;
  padding: 2rem;
`;

const Container = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 2rem;
  border-radius: 10px;
  &:nth-child(1) {
    background-image: url(${imgWeb});
  }
  &:nth-child(2) {
    background-image: url(${imgApp});
  }
  &:nth-child(3) {
    background-image: url(${imgGraph});
  }
  &::hover {
    background-color: #ffad9b;
  }
  @media (min-width: 1025px) {
    &:nth-child(1) {
      width: 50%;
      height: 540px;
      float: left;
      margin-right: 2rem;
    }
    &:nth-child(1)::after {
      content: "";
      clear: both;
      display: block;
    }
    &:nth-child(2) {
      background-image: url(${imgApp});
      width: 45%;
    }
    &:nth-child(3) {
      background-image: url(${imgGraph});
      width: 45%;
    }
  }
`;
const Title = styled.h2`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ExploreServices = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Web Design</Title>
        <div>
          <Link to="/web-design" style={{ color: "#fff" }}>
            View Projects
          </Link>
        </div>
      </Container>
      <Container>
        <Title>App Design</Title>
        <div>
          <Link to="/app-design" style={{ color: "#fff" }}>
            View Projects
          </Link>
        </div>
      </Container>
      <Container>
        <Title>Graphic Design</Title>
        <div>
          <Link to="graphic-design" style={{ color: "#fff" }}>
            View Projects
          </Link>
        </div>
      </Container>
    </Wrapper>
  );
};
export default ExploreServices;

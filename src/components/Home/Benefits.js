import styled from "styled-components";
import resorcefull from "../../images/home/desktop/illustration-resourceful.svg";
import passionate from "../../images/home/desktop/illustration-passionate.svg";
import friendly from "../../images/home/desktop/illustration-friendly.svg";

const Wrapper = styled.section`
  width: 90%;
  margin: 2rem auto;
  padding: 1rem;
  @media (min-width: 1100px) {
    display: flex;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (min-width: 550px) {
    flex-direction: row;
    align-items: center;
  }
  @media (min-width: 1100px) {
    flex-direction: column;
  }
`;
const TextWrapper = styled.div`
  padding: 8px;
`;
const ImgWrapper = styled.img`
  max-width: 250px;
  margin: auto;
`;
const Title = styled.h5`
  margin-tom: 2rem;
  margin-bottom: 2rem;
`;

const Benefits = () => {
  return (
    <Wrapper>
      <Container>
        <ImgWrapper src={passionate} alt="passionate" />
        <TextWrapper>
          <Title>Passionate</Title>
          <p>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </TextWrapper>
      </Container>
      <Container>
        <ImgWrapper src={resorcefull} alt="resorcefull" />
        <TextWrapper>
          <Title>Resourceful</Title>
          <p>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </TextWrapper>
      </Container>
      <Container>
        <ImgWrapper src={friendly} alt="friendly" />
        <TextWrapper>
          <Title>Friendly</Title>
          <p>
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </TextWrapper>
      </Container>
    </Wrapper>
  );
};
export default Benefits;

import styled from "styled-components";

const ShowcaseImg = styled.img`
  width: 100%;
  height: 400px;
  @media (min-width: 600px) {
    width: 50%;
  }
  @media (min-width: 1000px) {
    width: 100%;
  }
`;
export default ShowcaseImg;

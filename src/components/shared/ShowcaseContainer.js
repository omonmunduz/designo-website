import styled from "styled-components";

const ShowcaseContainer = styled.div`
  width: 100%;
  margin: 1.5rem auto;
  border-radius: 10px;
  overflow: hidden;
  @media (min-width: 600px) {
    display: flex;
  }
  @media (min-width: 1000px) {
    flex-direction: column;
    width: 30%;
    margin: 10px;
  }
`;

export default ShowcaseContainer;

import styled from "styled-components";

const ShowcaseText = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 0.4rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
  background-color: #f1f3f5;
  @media (min-width: 600px) {
    width: 50%;
    height: 400px;
  }
  @media (min-width: 1000px) {
    width: 100%;
    height: 150px;
  }
`;
export default ShowcaseText;

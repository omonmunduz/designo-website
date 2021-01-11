import { Link } from "@reach/router";
import styled from "styled-components";

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
const GoTo = styled.h4`
  color: #1d1c1e;
  &:hover {
    color: #e7816b;
  }
  @media (max-width: 550px) {
    margin: 10px;
  }
`;

const MobileNavOptions = () => {
  return (
    <Menu>
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
    </Menu>
  );
};
export default MobileNavOptions;

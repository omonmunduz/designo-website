import { useState } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import NavDrawer from "./NavDrawer";
import Backdrop from "./Backdrop";
import hamburger from "../../images/shared/mobile/icon-hamburger.svg";
import closeIcon from "../../images/shared/mobile/icon-close.svg";

const Nav = styled.nav`
  display: none;
  @media (min-width: 550px) {
    display: flex;
    width: 100%;
    padding: 15px;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const GoTo = styled.h4`
  color: #1d1c1e;
  &:hover {
    color: #e7816b;
  }
  @media(max-width: 550px) {
      margin: 10px;
  }
`;

const MobileNav = styled.nav`
  display: flex;
  width: 100%;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 550px) {
    display: none;
  }
`;
const MobileNavOptions = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
const Icon = styled.img`
  position: relative;
  cursor: pointer;
  z-index: 30;
`;
const Navigation = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    setOpen(true);
  };
  const closeDrawer = () => {
    setOpen(false);
  };


  return (
    <header>
      <Nav>
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
      </Nav>
      <MobileNav>
        <h3>Designo</h3>
        {open && <Backdrop onClick={closeDrawer} />}
        <NavDrawer show={open} closeBtn = {closeDrawer}>
            <MobileNavOptions>
                <Link to ="/"><GoTo>Home</GoTo></Link>
                <Link to="/about"><GoTo>About</GoTo></Link>
                <Link to="/locations"><GoTo>Locations</GoTo></Link>
                <Link to="/contact"><GoTo>Contact</GoTo></Link>
            </MobileNavOptions>
        </NavDrawer>
        <Icon
          src={open ? closeIcon : hamburger }
          alt="hamburger icon"
          onClick={openDrawer}
        />
      </MobileNav>
    </header>
  );
};
export default Navigation;

import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import closeIcon from '../../images/shared/mobile/icon-close.svg';

const Drawer = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  height: 50vh;
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`;
const Close = styled.img`
    position: absolute;
    right: 15px;
    top: 25px;
    cursor: pointer;
`;

const NavDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-bottom"
      mountOnEnter
      unmountOnExit
    >
      <Drawer>
          <Close src={closeIcon} alt="close icon" onClick={props.closeBtn}/>
          {props.children}
      </Drawer>
    </CSSTransition>
  );
  return ReactDOM.createPortal(
    content,
    document.getElementById("nav-drawer-hook")
  );
};
export default NavDrawer;

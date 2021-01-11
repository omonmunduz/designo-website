import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Back = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10;
`;

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <Back className="backdrop" onClick={props.onClick}></Back>,
    document.getElementById("backdrop-hook")
  );
};
export default Backdrop;

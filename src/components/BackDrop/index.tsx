import React from "react";
import styled from "styled-components";

const Back = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.23);
  display: none;

  &.open {
    display: block;
  }
`;

interface open {
    open: boolean
    close: () => void
}

const BackDrop = (prop: open) => {
    return <Back className={prop.open ? "open" : ""} onClick={prop.close}>
    </Back>;
}

export default BackDrop;
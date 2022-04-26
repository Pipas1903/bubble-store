import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Search from "../Search";

const Bubbles = require("../../assets/images/bubbles.png")

const BubbleLogo = styled(Link)`
  width: 50px;
  height: 50px;
  background-image: url(${Bubbles});
  background-size: cover;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

const Logo = () => {
    return <BubbleLogo to="/"/>

}

export default Logo;
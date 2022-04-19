import React, {useState} from "react";
import styled from "styled-components";
import Logo from "../Logo";

const burguer = require("../../assets/images/menu.png")
const shoppingCart = require("../../assets/images/carts.png");
const Title = styled.h1`
  color: #5284cf;
  font-family: 'Chicle', cursive;
  letter-spacing: 2px;
  font-size: 45px;
`;
const ShoppingCart = styled.button`
  background-image: url(${shoppingCart});
  background-size: cover;
  //color: #5284cf;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;
const Burguer = styled.button`
  background-image: url(${burguer});
  background-size: cover;
  width: 38px;
  height: 38px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  margin: 10px;
`;
const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background-color: rgba(56, 56, 56, 0.6);
  border-bottom: 1px solid #5284cf;
`;

interface get {
    onClick: () => void
}

const Header = (prop: get) => {

    return (<StyledHeader>
        <div style={{display: "flex"}}>
            <Burguer onClick={prop.onClick}/>
            <Logo/>
        </div>
        <Title>Bubble Store</Title>
        <ShoppingCart/>
    </StyledHeader>);

}

export default Header;
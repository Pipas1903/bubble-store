import React, {useState} from "react";
import styled from "styled-components";
import Logo from "../Logo";
import Search from "../Search";

const burguer = require("../../assets/images/menu.png")
const shoppingCart = require("../../assets/images/carts.png");
const Title = styled.h1`
  color: #5284cf;
  font-family: 'Chicle', cursive;
  letter-spacing: 2px;
  font-size: 45px;
  align-self: center;

  @media (max-width: 768px) {
    font-size: 30px;
  }
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

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
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

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;
const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
  background-color: rgba(56, 56, 56, 0.6);
  border-bottom: 1px solid #5284cf;
  height: 40px;
`;

interface get {
    burguer: () => void,
    cart: () => void
}

const Header = ({burguer, cart}: get) => {

    return (<StyledHeader>
        <div style={{display: "flex", alignItems: "center"}}>
            <Burguer onClick={burguer}/>
            <Logo/>
        </div>
        <Title>Bubble Store</Title>
        <ShoppingCart onClick={cart}/>
    </StyledHeader>);

}

export default Header;
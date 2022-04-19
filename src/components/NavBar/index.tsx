import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 8px;
  background-color: rgba(255, 130, 188, 0.13);
  border-bottom: 1px solid #5284cf;
`;

const Categories = styled(Link)`
  color: #E1519E;
  font-size: 25px;
  text-decoration: none;
  cursor: pointer;
  transition: color ease-in-out 400ms;

  &:hover {
    color: #5284cf
  }
`;

const NavBar = () => {
    return (<Bar>
        <Categories to="/">Home</Categories>
        <Categories to="/products">All Products</Categories>
        <Categories to="/category/hair-care">Hair Products</Categories>
        <Categories to="/category/shower">Shower Products</Categories>
    </Bar>);
}

export default NavBar;
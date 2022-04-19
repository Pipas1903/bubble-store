import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {FaChevronRight} from "@react-icons/all-files/fa/FaChevronRight";

const Categories = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
const Category = styled(Link)`
  color: #778ef7;
  font-size: 25px;
  text-decoration: none;
  transition: color ease-in-out 500ms;

  &:hover {
    color: #DBBDCD;
  }
`;
const Arrow = styled(FaChevronRight)`
  color: #778ef7;
  width: 5%;
`;

interface Array {
    categories: string[]
}

const ProductCategoriesBar = (props: Array) => {
    return (<Categories>
        <Category to={"/products"}>all products</Category>
        <Arrow/>
        <Category to={"/category/" + props.categories[0]}>{props.categories[0]}</Category>
        <Arrow/>
        <Category to={"/category/" + props.categories[1]}>{props.categories[1]}</Category>
        <Arrow/>
        <Category to={"/category/" + props.categories[2]}>{props.categories[2]}</Category>
    </Categories>);
}

export default ProductCategoriesBar;
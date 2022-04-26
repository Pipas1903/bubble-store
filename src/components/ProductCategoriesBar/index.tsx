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
  width: 100%;
`;

const Category = styled(Link)`
  color: #778ef7;
  font-size: 25px;
  text-decoration: none;
  transition: color ease-in-out 500ms;

  @media (max-width: 768px) {
    font-size: 18px;
  }

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

const ProductCategoriesBar = ({categories}: Array) => {
    if (categories[0] === undefined) {
        return <Category to={"/products"}>all products</Category>;
    }
    if (categories[1] === undefined) {
        return (<Categories>
            <Category to={"/products"}>all products</Category>
            <Arrow/>
            <Category to={"/category/" + categories[0]}>{categories[0]}</Category>
        </Categories>);
    }
    if (categories[2] === undefined) {
        return (<Categories>
            <Category to={"/products"}>all products</Category>
            <Arrow/>
            <Category to={"/category/" + categories[0]}>{categories[0]}</Category>
            <Arrow/>
            <Category to={"/category/" + categories[0] + "/" + categories[1]}>{categories[1]}</Category>
        </Categories>);
    }
    return (<Categories>
        <Category to={"/products"}>all products</Category>
        <Arrow/>
        <Category to={"/category/" + categories[0]}>{categories[0]}</Category>
        <Arrow/>
        <Category to={"/category/" + categories[0] + "/" + categories[1]}>{categories[1]}</Category>
        <Arrow/>
        <Category
            to={"/category/" + categories[0] + "/" + categories[1] + "/" + categories[2]}>{categories[2]}</Category>
    </Categories>);
}

export default ProductCategoriesBar;
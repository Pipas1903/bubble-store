import React, {useContext, useState} from "react";
import styled from "styled-components";
import {Context, CartProducts} from "../../App";
import {ProdJson} from "../Pagination";

const QuantityButton = styled.input`
  background-color: rgba(248, 210, 224, 0.18);
  border: 2px solid #E1519E;

  color: #E1519E;
  font-family: inherit;
  font-weight: bolder;
  font-size: 20px;

  width: 100px;
  height: 45px;
  border-radius: 8px;

  display: inline;
  margin: 5px;
  cursor: pointer;

  transition: all linear 300ms;

  &:hover {
    background-color: rgba(248, 210, 224, 0.82);
    color: black;
  }

  &:active {
    width: 90px;
    height: 40px;
    font-size: 18px;
  }
`;

const QuantityManager = styled.div`
  display: flex;
`;

interface Stuff {
    product: ProdJson,
    setCart: (products: ProdJson) => void,
    cart: CartProducts
}

const BuyingOptions = ({product, setCart, cart}: Stuff) => {

    const addProductsToCart = () => {
        setCart(product)
    }

    return (<QuantityManager>
        <QuantityButton type="button"
                        value="Add to cart"
                        onClick={addProductsToCart}/>
    </QuantityManager>);
}
export default BuyingOptions;

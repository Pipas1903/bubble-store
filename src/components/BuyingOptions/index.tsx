import React, {useContext, useState} from "react";
import styled from "styled-components";
import {Context} from "../../App";

const QuantityButton = styled.input`
  color: #E1519E;
  background-color: white;
  border: 2px solid #E1519E;
  font-size: 25px;

  border-radius: 50%;
  width: 45px;
  height: 45px;

  display: inline;
  line-height: 0;
  margin: 5px;
  vertical-align: middle;
`;

const Quantity = styled.p`
  color: #E1519E;
  border: 2px solid #E1519E;
  font-size: 20px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  margin: 5px;
  width: 20px;
  text-align: center;
  font-weight: bold;
`;

const QuantityManager = styled.div`
  display: flex;
`;


const BuyingOptions = ({product, setProductQuantity}: any) => {
    const addProductsToCart = (operation: string) => {
        if (operation === "+") {
            setProductQuantity(product.quantity + 1);
            return;
        }
        if (operation === "-") {
            setProductQuantity(product.quantity - 1);
            return;
        }
    }

    return (<QuantityManager>
        <QuantityButton type="button"
                        value="+"
                        disabled={product.quantity >= 5}
                        onClick={() => {
                            addProductsToCart("+");
                        }}/>
        <Quantity>{product.quantity}</Quantity>
        <QuantityButton type="button"
                        value="-"
                        disabled={product.quantity <= 0}
                        onClick={() => {
                            addProductsToCart("-")
                        }}/>
    </QuantityManager>);
}
export default BuyingOptions;

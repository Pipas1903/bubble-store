import React, {useState} from 'react';
import styled from 'styled-components';
import {Product} from "../../../src/pages/ProductDescriptionPage";
import AllProducts from "../../products.json";

interface props {
    name: string,
    quantity: number,
    increment: (name: string) => void,
    decrement: (name: string) => void
}

const Image = styled.img`
  width: 15%;
  padding-right: 10px;
`;
const P = styled.p`
  font-size: 20px;
`;
const Div = styled.div`
  display: flex;
  padding-right: 10px;

  &.container {
    flex-direction: row;
    background-color: rgb(50, 82, 133);
    padding: 10px;
    margin-bottom: 10px;
    justify-content: space-between;
  }

  &.info {
    flex-direction: column;
    justify-content: center;
  }

  &.buttons {
    align-items: center;
    justify-content: center;
    justify-self: flex-end;
  }
`;
const ChangeQuantity = styled.input`
  width: 30px;
  height: 30px;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.83);
  color: #ff82bc;
  border: 1px solid black;
  margin-right: 5px;
  border-radius: 50%;
  cursor: pointer;
  transition: all linear 200ms;

  &:hover {
    background-color: #525151;
  }
`;


const ProdInCart = ({name, quantity, increment, decrement}: props) => {
    const entries = Object.entries(AllProducts);
    const values = Object.values(AllProducts);
    const getProductId = (name: string) => {
        for (let i = 0; i < entries.length; i++) {
            if (name === entries[i][1].name) {
                return entries[i][0];
            }
        }
        return "not found";
    }
    const [prod, setProd] = useState(values.find(el => el.name === name));

    if (prod === undefined)
        return <></>

    return <Div className="container">
        <Div>
            <Image src={prod.img[0]} alt={prod.name}/>
            <Div className="info">
                <P>{prod.name}</P>
                <P>Quantity: {quantity}</P>
                <P>Price: {prod.price}€</P>
            </Div>
        </Div>
        <Div className="buttons">
            <ChangeQuantity type="button" value="+" onClick={() => increment(prod.name)}/>
            <ChangeQuantity type="button" value="-" onClick={() => decrement(prod.name)}/>
        </Div>
    </Div>
}

export default ProdInCart;
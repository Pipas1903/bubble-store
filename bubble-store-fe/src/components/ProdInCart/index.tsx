import React, {useState} from 'react';
import styled from 'styled-components';
import AllProducts from "../../products.json";
import {ProdJson} from '../Pagination';

interface props {
    product: ProdJson,
    quantity: number,
    increment: (prod: ProdJson) => void,
    decrement: (prod: ProdJson) => void
}

const Image = styled.img`
  width: 16%;
  padding-right: 10px;
  @media (max-width: 768px) {
    width: 35%;
  }
`;
const P = styled.p`
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const Div = styled.div`
  display: flex;
  padding-right: 10px;

  &.container {
    flex-direction: row;
    background-color: rgb(51, 50, 50);
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

  @media (max-width: 768px) {
    font-size: 14px;
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: #525151;
  }
`;


const ProdInCart = ({product, quantity, increment, decrement}: props) => {
    const [prod, setProd] = useState(product);

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
            <ChangeQuantity type="button" value="+" onClick={() => increment(prod)}/>
            <ChangeQuantity type="button" value="-" onClick={() => decrement(prod)}/>
        </Div>
    </Div>
}

export default ProdInCart;
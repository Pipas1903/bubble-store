import React, {useContext, useEffect, useState, useLayoutEffect} from 'react';
import styled from 'styled-components';
import {Context, CartProducts, PriceContext} from '../../App';
import {ProdJson} from '../Pagination';
import ProdInCart from '../ProdInCart';

const CartModal = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  color: white;
  display: flex;
  flex-direction: column;
  transition: all ease-in-out 0.5s;
  width: 50%;
  height: 65%;
  padding: 20px;

  background-color: rgba(0, 0, 0, 0.88);
  border: 1px solid white;
  @media (max-width: 768px) {
    width: 80%;
    height: 65%;
  }

  &.show {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &.regular {
    display: none;
  }
`;
const Products = styled.div`
  &.title {
    flex: 0 1 auto;
  }

  &.products {
    flex: 1 1 auto;
    flex-grow: 1;
    overflow: scroll;
    margin-bottom: 20px;
  }

  &.buttons {
    flex: 0 1 10%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;
const H1 = styled.h1`
  text-align: center;
  background-color: rgb(51, 50, 50);
  padding: 5px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
const Price = styled.h1`
  padding: 5px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
const Buttons = styled.input`
  font-family: inherit;
  font-weight: bolder;
  font-size: 16px;
  color: #ff82bc;
  background-color: rgb(0, 0, 0);
  border: 1px solid #ff82bc;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
`;

interface props {
    cartModal: boolean,
    setCartModal: () => void,
}

const Cart = ({cartModal, setCartModal}: props) => {
    const {cart, setCart} = useContext(Context);
    const {price, calculateTotal} = useContext(PriceContext);

    useEffect(() => {
        calculateTotal();
    }, [cart])

    function increment(product: ProdJson) {
        let temp = cart;
        // @ts-ignore
        const quantity = cart[product.name]?.quantity;
        // @ts-ignore
        temp[product.name].quantity = quantity + 1;
        setCart(temp);
        calculateTotal();
    }

    function decrement(product: ProdJson) {
        let temp = cart;
        // @ts-ignore
        const quantity = cart[product.name].quantity
        // @ts-ignore
        temp[product.name].quantity = quantity - 1;
        // @ts-ignore
        if (temp[product.name].quantity === 0) {
            // @ts-ignore
            delete temp[product.name];
        }

        if (Object.values(temp).length === 0)
            setCartModal();

        setCart(temp);
        calculateTotal();
    }

    function deleteAll() {
        setCartModal();
        setCart({});
    }

    return <CartModal className={cartModal ? "show" : "regular"}>
        <Products className={"title"}>
            <H1>Items on your cart!</H1>
        </Products>
        <Products className="products">
            {cart !== {} && Object.values(cart).map((el, index) => <ProdInCart key={el.element.name}
                                                                               product={el.element}
                                                                               increment={increment}
                                                                               decrement={decrement}
                                                                               quantity={el.quantity}/>)}

        </Products>
        <Products className="buttons">
            <Price>Total: {price}€</Price>
            <Buttons type="button"
                     value="Empty Cart"
                     onClick={deleteAll}/>
            <Buttons type="button" value="Pay"/>
        </Products>
    </CartModal>
}

export default Cart;
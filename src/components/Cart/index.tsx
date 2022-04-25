import React, {useContext, useEffect, useState, useLayoutEffect} from 'react';
import styled from 'styled-components';
import {Context} from '../../App';
import {Product} from '../../pages/ProductDescriptionPage';
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
`;
const Price = styled.h1`
  padding: 5px;
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
    setCartModal: () => void
}

const noProduct: Product = {name: "", price: 0, id: "", img: ""}

const Cart = ({cartModal, setCartModal}: props) => {
    let defaultArray: number[] = [];
    const {cart, setCart} = useContext(Context);
    const [sortedCart, setSortedCart] = useState(cart.filter((el, index) => cart.indexOf(el) === index));
    const [quantities, setQuantities] = useState(defaultArray);
    const [price, setPrice] = useState(0);

    useLayoutEffect(() => {
        removeDuplicates();
        calculateTotal();
    }, [cart])

    function removeDuplicates() {
        setSortedCart(cart.filter((item, index) => cart.indexOf(item) === index));
        setQuantities(checkQuantity());
    }

    function checkQuantity() {
        let array: number[] = [];
        sortedCart.map(el => array.push(countNumberOfTimes(el.name)));
        return array;
    }

    function countNumberOfTimes(element: string) {
        let count: number = 0;
        cart.forEach(el => el.name === element ? count++ : "");
        if (count === 0) {
            removeDuplicates();
        }
        return count;
    }

    function increment(name: string) {
        let temp = cart;
        // @ts-ignore
        temp.push(cart.find(el => el.name === name));
        setCart(temp);
        setQuantities(checkQuantity())
        calculateTotal();
    }

    function decrement(name: string) {
        let temp = cart;
        for (let i = 1; i < temp.length; i++) {
            if (temp[i] === cart.find(el => el.name === name)) {
                temp.splice(i, 1);
                setCart(temp);
                setQuantities(checkQuantity());
                calculateTotal();
                break;
            }
        }
    }

    function calculateTotal() {
        if (cart.length === 0)
            return;
        const allPrices = cart.map(el => el.price);
        setPrice(allPrices.reduce((previousValue, currentValue) => previousValue + currentValue));
    }

    function deleteAll() {
        setCart([noProduct])
        setCartModal()
    }

    return <CartModal className={cartModal ? "show" : "regular"}>
        <Products className={"title"}>
            <H1>Items on your cart!</H1>
        </Products>
        <Products className="products">
            {sortedCart.map((el, index) => <ProdInCart key={el.name}
                                                       name={el.name}
                                                       increment={increment}
                                                       decrement={decrement}
                                                       quantity={countNumberOfTimes(el.name)}/>)
            }
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
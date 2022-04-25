import React, {useContext, useEffect} from 'react';
import styled from 'styled-components';
import {Context} from '../../App';
import {Product} from '../../pages/ProductDescriptionPage';
import AllProducts from "../../products.json";
import ProdInCart from '../ProdInCart';


const Sidebar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  z-index: 1;

  background-color: #5284cf;
  color: white;
  display: flex;
  flex-direction: column;
  transform: translateX(-100%);
  transition: all 0.4s;

  &.open {
    transform: translateX(0%);
  }
`;

const Cart = () => {
    const {cart} = useContext(Context);
    const entries = Object.entries(AllProducts);
    const getProductId = (name: string) => {
        for (let i = 0; i < entries.length; i++) {
            if (name === entries[i][1].name) {
                return entries[i][0];
            }
        }
        return "not found";
    }

    useEffect(() => {
    }, [cart])


    const productsAdded: Product[] | [] = cart;

    return <div>
        {cart.map(el => <ProdInCart/>)}
    </div>
}

export default Cart;
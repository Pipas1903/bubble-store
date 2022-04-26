import React, {createContext, useState} from 'react';
import {Outlet} from 'react-router-dom';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import BackDrop from "./components/BackDrop";
import {ProdJson} from "../src/components/Pagination";
import Cart from './components/Cart';

export type CartProducts = {
    [name: string]: {
        quantity: number,
        element: ProdJson
    }
} | {};

export const Context = createContext<{ cart: CartProducts, setCart: (product: CartProducts) => void }>({
    cart: {},
    setCart: (product: CartProducts) => console.warn("no setter")
})

export const PriceContext = createContext({
    price: 0,
    calculateTotal: () => console.warn("no calculator")
})

const App = () => {
    const [sidebar, setSidebar] = useState(false);
    const [cartModal, setCartModal] = useState(false);
    const toggleSidebar = () => {
        setSidebar((prevState => !prevState))
    }
    const toggleCart = () => {
        setCartModal((prevState => !prevState));
    }
    const [cart, setCart] = useState({});
    const [price, setPrice] = useState(0);

    function calculateTotal() {
        if (cart === {})
            return;
        // @ts-ignore
        const price = Object.values(cart).reduce(((acc, currentValue) => acc += currentValue.quantity * currentValue.element.price), 0)
        // @ts-ignore
        setPrice(price.toFixed(2));
    }

    return (<>
            <Context.Provider value={{cart, setCart}}>
                <PriceContext.Provider value={{price, calculateTotal}}>
                    <Cart cartModal={cartModal} setCartModal={toggleCart}/>
                    <BackDrop open={cartModal} close={toggleCart}/>
                    <BackDrop open={sidebar} close={toggleSidebar}/>
                    <SideBar sidebar={sidebar} open={toggleSidebar}/>
                    <div className="main">
                        <div className="App">
                            <Header burguer={toggleSidebar} cart={toggleCart}/>
                            <NavBar/>
                        </div>
                        <div className="outlet">
                            <Outlet/>
                        </div>
                        <div className="footer-container">
                            <Footer/>
                        </div>
                    </div>
                </PriceContext.Provider>
            </Context.Provider>
        </>
    );
}
export default App;
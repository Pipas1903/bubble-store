import React, {createContext, useState} from 'react';
import {Outlet} from 'react-router-dom';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import BackDrop from "./components/BackDrop";
import {Product} from "../src/pages/ProductDescriptionPage";
import Cart from './components/Cart';

const defaultProduct: Product = {
    name: "",
    id: "",
    price: 0,
    img: ""
}

export const Context = createContext({
    cart: [defaultProduct],
    setCart: ([]: any) => console.warn("no setter")
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
    const [cart, setCart] = useState([]);

    return (<>
            <Context.Provider value={{cart, setCart}}>
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
            </Context.Provider>
        </>
    );
}
export default App;
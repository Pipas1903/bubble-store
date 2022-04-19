import React, {createContext, useState} from 'react';
import {Outlet} from 'react-router-dom';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import BackDrop from "./components/BackDrop";


export const Context = createContext({cart: [], setCart: ([]: any) => console.warn("no setter")});
const App = () => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar((prevState => !prevState))
    }
    const [cart, setCart] = useState([]);

    return (<Context.Provider value={{cart, setCart}}>
            <BackDrop open={sidebar} close={toggleSidebar}/>
            <SideBar sidebar={sidebar} open={toggleSidebar}/>
            <div className="main">
                <div className="App">
                    <Header onClick={toggleSidebar}/>
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
    );
}

export default App;

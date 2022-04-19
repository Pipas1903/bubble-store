import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import App from "./App";
import GlobalStyles from "./GlobalStyles";
import Home from './pages/Home';
import ProductDescriptionPage from "./pages/ProductDescriptionPage";
import CategoryProductListPage from "./pages/CategoryProductListPage";
import CategoryListing from "./components/CategoryListing";
import FilteredCategories from "./components/FilteredCategories";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles/>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<Home/>}/>

                    <Route path="/products" element={<CategoryProductListPage/>}>
                        <Route index element={<FilteredCategories/>}/>
                        <Route path=":productId" element={<ProductDescriptionPage/>}/>
                    </Route>

                    <Route path="/category" element={<CategoryProductListPage/>}>
                        <Route index element={<CategoryListing/>}/>
                        <Route path=":name" element={<FilteredCategories/>}/>
                    </Route>

                </Route>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root')
);


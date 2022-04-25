import React, {useEffect, useState} from 'react';
import ProductPreview from "../ProductPreview";
import PageManager from "../PageManager";
import {Location, useLocation, useNavigate, useParams} from "react-router-dom";
import AllProducts from "../../products.json";
import styled from "styled-components";
import Order from "../Order";
import * as path from "path";
import ProductCategoriesBar from '../ProductCategoriesBar';

interface stuff {
    path: Location,
    categoryName: string,
    subCategory: string,
    thirdCategory: string
}

interface Prod {
    name: string,
    price: number,
    description: string,
    ingredients: string,
    weight: number
    img: string[],
    category: {
        "0": string,
        "1": string,
        "2": string
    }
}

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  row-gap: 15px;
  column-gap: 10px;
  flex-wrap: wrap;
`;
const PageContainer = styled.div`

`;

const All = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Pagination = ({categoryName, path, subCategory, thirdCategory}: stuff) => {
    const location = useLocation();

    function queryParam(param: string) {
        return new URLSearchParams(location.search).get(param);
    }

    const navigate = useNavigate();
    const [products, setProducts] = useState(Object.values(AllProducts));
    const [currentPage, setCurrentPage] = useState(parseInt(queryParam("page") || "1"));
    const [atr, setAtr] = useState("Default");
    const [productsPerPage] = useState(10);
    const entries = Object.entries(AllProducts);
    const [, updateState] = React.useState({"": ""});

    function filterProducts(path: Location): Prod[] {
        const values = Object.values(AllProducts);

        if (thirdCategory !== undefined) {
            return values.filter((el) => {
                return (el.category[0] === categoryName && el.category[1] === subCategory && el.category[2] === thirdCategory);
            });
        }

        if (subCategory !== undefined) {
            return values.filter((el) => {
                return (el.category[0] === categoryName && el.category[1] === subCategory);
            });
        }

        if (path.pathname.includes("category")) {
            return values.filter((el) => el.category[0] === categoryName || el.category[1] === categoryName || el.category[2] === categoryName);
        }

        return values;
    }

    useEffect(() => {
        setProducts(filterProducts(path))
        setCurrentPage(1);
    }, [categoryName, subCategory, thirdCategory])

    // get current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // change page
    function paginate(pageNumber: number) {
        setCurrentPage(parseInt(pageNumber + ""));
        navigate(`?page=${pageNumber}`);
    }

    const getProductId = (name: string) => {
        for (let i = 0; i < entries.length; i++) {
            if (name === entries[i][1].name) {
                return entries[i][0];
            }
        }
        return "not found";
    }

    function order(atr: string): void {
        setAtr(atr)
        if (atr === "default") {
            setProducts(filterProducts(path))
            return;
        }
        if (atr === "+")
            setProducts((current: Prod[]) => current.sort(function (a, b) {
                return b.price - a.price;
            }));
        if (atr === "-")
            setProducts((current: Prod[]) => current.sort(function (a, b) {
                return a.price - b.price;
            }));
    }

    return (<All>
        <ProductCategoriesBar categories={[categoryName, subCategory, thirdCategory]}/>
        <Order fn={order} atr={atr}/>
        <Container>
            {currentProducts.map(el => <ProductPreview key={getProductId(el.name)}
                                                       id={getProductId(el.name)}
                                                       name={el.name}
                                                       price={el.price}
                                                       images={el.img}/>)}
        </Container>
        <PageContainer>
            <PageManager productsPerPage={productsPerPage}
                         totalProducts={products.length}
                         paginate={paginate}
            />
        </PageContainer>
    </All>);
}

export default Pagination;
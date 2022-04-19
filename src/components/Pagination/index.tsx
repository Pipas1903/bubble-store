import React, {useEffect, useState} from 'react';
import ProductPreview from "../ProductPreview";
import PageManager from "../PageManager";
import {Location} from "react-router-dom";
import AllProducts from "../../products.json";
import styled from "styled-components";
import Order from "../Order";

interface stuff {
    path: Location,
    categoryName: string
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

const Pagination = (props: stuff) => {
    const [products, setProducts] = useState(Object.values(AllProducts));
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);
    const entries = Object.entries(AllProducts);

    const [, updateState] = React.useState({"": ""});
    const forceUpdate = React.useCallback(() => updateState({"": "update"}), []);

    function filterProducts(path: Location): Prod[] {
        const values = Object.values(AllProducts);
        if (path.pathname.includes("category")) {
            return values.filter((el) => el.category[0] === props.categoryName || el.category[1] === props.categoryName || el.category[2] === props.categoryName);
        }
        return values;
    }

    useEffect(() => {
        setProducts(filterProducts(props.path))
        setCurrentPage(1)
    }, [props.path, props.categoryName])


    // get current posts
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // change page
    function paginate(pageNumber: number) {
        setCurrentPage(pageNumber)
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
        if (atr === "+")
            setProducts((current: Prod[]) => current.sort(function (a, b) {
                return b.price - a.price;
            }));
        if (atr === "-")
            setProducts((current: Prod[]) => current.sort(function (a, b) {
                return a.price - b.price;
            }));
       forceUpdate();
    }

    return (<All>
        <Order fn={order}/>
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
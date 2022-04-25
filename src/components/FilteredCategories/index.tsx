import React, {useEffect, useLayoutEffect, useState} from "react";
import ProductPreview from "../ProductPreview";
import products from "../../products.json";
import {Location, useLocation, useParams} from "react-router-dom";
import styled from "styled-components";
import Pagination from "../Pagination";

const Title = styled.h1`
  margin-top: 20px;
  text-align: center;
  font-family: "Chicle", cursive;
  color: #DBBDCD;
  letter-spacing: 1px;
  font-size: 40px;
  text-transform: capitalize;
`;

/*
*
* const Container = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  row-gap: 10px;
  column-gap: 10px;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  margin-top: 20px;
  text-align: center;
  font-family: "Chicle", cursive;
  color: #DBBDCD;
  letter-spacing: 1px;
  font-size: 40px;
  text-transform: capitalize;
`;*/

const FilteredCategories = () => {

    const path = useLocation();
    const params = useParams();
    const {name, subName, thirdName} = params;

    const entries = Object.entries(products);

    return (<div>
            <Title>{name ? name : "All Products"}</Title>
            <div>
                <Pagination path={path}
                            categoryName={name as string}
                            subCategory={subName as string}
                            thirdCategory={thirdName as string}/>
            </div>
        </div>
    );
}

export default FilteredCategories;
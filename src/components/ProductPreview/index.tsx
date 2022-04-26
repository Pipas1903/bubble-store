import React from "react";
import ProductImage from "../ProductImage";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {LazyLoadComponent} from "react-lazy-load-image-component";


interface productDescription {
    id: string,
    name: string,
    price: number,
    images: string[]
}

const Product = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;

  cursor: pointer;
  padding: 10px;
  height: 20%;
`;
const Name = styled.h1`
  font-size: 20px;
  margin-bottom: 10px;
  width: fit-content;
`;

const Image = styled(ProductImage)`
  width: 100%`;


const ProductPreview = (props: productDescription) => {
    const navigate = useNavigate();

    const showProduct = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
        const path = "/products/" + id;
        navigate(path);
    }

    return <LazyLoadComponent>
        <Product onClick={(e) => showProduct(e, props.id)}>
            <Image path={props.images[0]}
                   alt={props.name}/>

            <Name>{props.name}</Name>
            <p>{props.price}€</p>

        </Product>
    </LazyLoadComponent>

}

export default ProductPreview;
import React from "react";
import styled from "styled-components";
import {LazyLoadImage} from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const placeholder = require("../../assets/images/shop-gfd2118690_1920.jpg");

interface ImageInfo {
    path: string,
    alt: string
}

const Image = styled(LazyLoadImage)`
  width: 90%;
`;

const ProductImage = (props: ImageInfo) => {
    return <Image src={props.path} alt={props.alt} effect={"blur"} placeholderSrc={placeholder}/>
}

export default ProductImage;
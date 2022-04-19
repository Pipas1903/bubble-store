import ProductImage from "../components/ProductImage";
import products from "../products.json";
import {Link, useNavigate, useParams} from "react-router-dom";
import styled from "styled-components";
import ProductCategoriesBar from "../components/ProductCategoriesBar";
import BuyingOptions from "../components/BuyingOptions";
import React, {useContext, useState} from "react";
import NotFound from "./NotFound";

const Name = styled.h1`
  color: #E1519E;
  font-size: 30px;
  margin-top: 15px;
  text-align: center;
  font-family: 'Chicle', cursive;
  letter-spacing: 2px;
  font-weight: lighter;
`;
const Text = styled.p`
  color: #DBBDCD;
  font-size: 18px;
  overflow-wrap: break-word;
  font-weight: bold;
  font-family: 'Exo', sans-serif;
  padding-bottom: 10px;
  text-align: justify;

  &.title {
    color: #E8E8E8;
    font-size: 22px;
    font-weight: bolder;
  }

  &.titleIngredients {
    color: #E8E8E8;
    font-size: 16px;
    font-weight: bolder;
  }

  &.ingredients {
    max-width: fit-content;
    font-size: 10px;
    column-width: 150px;
    column-count: 2;
  }
`;
const Container = styled.div`
  justify-self: flex-start;
  margin: 10px 30px;
  width: inherit;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ProductContainer = styled.div`
  width: inherit;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Information = styled.div`
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Price = styled.p`
  font-family: 'Chicle', cursive;
  color: #778ef7;
  font-size: 50px;
  margin-left: 15px;
`;

const ProductDescriptionPage = () => {
    const params = useParams();
    const productId = params.productId;

    const navigate = useNavigate();
    const entries = Object.entries(products);
    let chosen;

    for (let i = 0; i < entries.length; i++) {
        if (productId === entries[i][0]) {
            chosen = entries[i][1];
            break;
        }
    }
    // ADD MODAL FOR NOT FOUND WITH ON CLICK THAT REDIRECTS TO HOME OR SOMETHING

    if (!chosen) {
        return <NotFound/>;
    }

    const [product, setProduct] = useState({name: chosen.name, quantity: 0, id: productId, price: chosen.price});
    const setProductQuantity = (quantity: number) => setProduct({...product, quantity});


    return (<Container>
        <ProductCategoriesBar categories={Object.values(chosen.category)}/>
        <Name>{chosen.name}</Name>
        <ProductContainer>
            <ImagesContainer>
                <ProductImage alt={chosen.name} path={chosen.img[0]}/>
            </ImagesContainer>
            <Information>
                <Text className="title">Description: </Text>
                <Text>{chosen.description.split("\n").map((el) => <>{el} <br/> </>)}</Text>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div style={{width: "50%"}}>
                        <Text className="titleIngredients">Ingredients: </Text>
                        <Text className="ingredients">{chosen.ingredients.split(", ").map((el) => <>{el}
                            <br/> </>)}</Text>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", width: "50%", alignItems: "center"}}>
                        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                            <Text className="title">Price: </Text>
                            <Price>{chosen.price}€</Price>
                        </div>
                        <BuyingOptions product={product}
                                       setProductQuantity={setProductQuantity}/>
                    </div>
                </div>
                <Text className="titleIngredients">Quantity: </Text>
                <Text>{chosen.weight + (chosen.category[2] === "liquid" ? 'ml' : 'g')}</Text>

            </Information>
        </ProductContainer>
    </Container>);
}

export default ProductDescriptionPage;
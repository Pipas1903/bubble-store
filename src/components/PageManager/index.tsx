import React from "react";
import styled from "styled-components";

interface stuff {
    productsPerPage: number,
    totalProducts: number
    paginate: Function
}

const PageNumber = styled.input`
  padding: 6px;
  color: #5284cf;
  background-color: rgb(189, 216, 255);
  border: 2px solid #5284cf;
  font-size: 20px;
  font-family: 'Chicle', cursive;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
  transition: background-color ease-in-out 300ms;

  &:hover {
    background-color: white;
  }
`;

const PageManager = (props: stuff) => {
    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(props.totalProducts / props.productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul>
                {pageNumbers.map(number => (
                    <PageNumber type="button" key={number} value={number} onClick={() => props.paginate(number)}/>
                ))}
            </ul>
        </nav>
    );


}

export default PageManager;
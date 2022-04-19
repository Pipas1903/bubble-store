import React, {ChangeEvent, ReactEventHandler, useState} from "react";
import styled from "styled-components";

interface func {
    fn: (atr: string) => void;
}

const Sel = styled.select`
  width: 150px;
  padding: 4px;
  height: 30px;
  margin: 20px;
  font-family: inherit;
  color: #af1f6c;
  border: 1px solid #E1519E;
  font-weight: bolder;
  background-color: rgb(219, 189, 205);

  &:focus {
    outline: none;
  }
`;

const Order = (props: func) => {
    const [value, setValue] = useState("Choose Order");


    const handle = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value)
        props.fn(value);
    }

    return <Sel onChange={handle} value={value} placeholder={value}>
        <option value={"+"} onClick={() => props.fn("+")}>Expensive First</option>
        <option value={"-"} onClick={() => props.fn("-")}>Cheap First</option>
    </Sel>
}

export default Order;
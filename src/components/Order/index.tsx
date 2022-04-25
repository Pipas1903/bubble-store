import React, {ChangeEvent, ReactEventHandler, useEffect, useState} from "react";
import styled from "styled-components";

interface func {
    fn: (atr: string) => void;
    atr: string
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

const Order = ({fn, atr}: func) => {
    const [value, setValue] = useState("Choose Batatas");

    useEffect(() => {
        setValue(atr)
    }, [atr])

    const handle = (e: ChangeEvent<HTMLSelectElement>) => {
        fn(e.target.value);
    }

    return <Sel onChange={handle} value={value} placeholder={value}>
        <option value={"default"}>Default</option>
        <option value={"+"}>Expensive First</option>
        <option value={"-"}>Cheap First</option>
    </Sel>
}

export default Order;
import styled from "styled-components";
import {Link} from "react-router-dom";

const Sidebar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  z-index: 1;

  background-color: rgb(38, 61, 98);
  color: white;
  display: flex;
  flex-direction: column;
  transform: translateX(-100%);
  transition: all 0.4s;

  &.open {
    transform: translateX(0%);
  }
`;

const Text = styled.p`
  font-size: 25px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.48);
  padding: 15px;
`;

const Category = styled(Link)`
  font-size: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.48);
  color: white;
  padding: 15px;
  text-decoration: none;
  transition: all linear 500ms;

  &:hover {
    background-color: rgba(255, 255, 255, 0.83);
    color: black;
  }
`;

interface Prop {
    sidebar: boolean
    open: () => void
}

const SideBar = (prop: Prop) => {
    return <Sidebar className={prop.sidebar ? "open" : ""} onClick={prop.open}>
        <Text>All Categories</Text>
        <Category to={"/category/hair-care"}>Hair Care</Category>
        <Category to={"/category/shower"}>Shower</Category>
        <Category to={"/category/solid"}>Solid</Category>
        <Category to={"/category/liquid"}>Liquid</Category>
        <Category to={"/category/shampoo"}>Shampoo</Category>
        <Category to={"/category/conditioner"}>Conditioner</Category>
        <Category to={"/category/bath-bubble"}>Bath Bubble</Category>
        <Category to={"/category/body-wash"}>Body Wash</Category>
    </Sidebar>
}

export default SideBar
import styled from "styled-components";
import {Link} from "react-router-dom";
import Dropdown from "../Dropdown";
import Search from "../Search";

const Sidebar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  z-index: 1;

  background-color: black;
  color: #5284cf;
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
    color: #5284cf;
  }
`;

const DummyDiv = styled.div`
  height: 100%;
  width: 100%;
`;

interface Prop {
    sidebar: boolean
    open: () => void
}

const SideBar = ({sidebar, open}: Prop) => {
    return <Sidebar className={sidebar ? "open" : ""}>
        <Text>Categories</Text>
        <Dropdown parentState={sidebar}
                  setParentState={open}
                  name={"hair-care"}
                  level2={["shampoo", "conditioner"]}
                  level3={["solid", "liquid"]}/>
        <Dropdown parentState={sidebar}
                  setParentState={open}
                  name={"shower"}
                  level2={["body-wash", "bath-bubble"]}
                  level3={["solid", "liquid"]}/>
        <Text>Search Products</Text>
        <Search parentState={sidebar}
                setParentState={open}/>
        <DummyDiv onClick={open}></DummyDiv>
    </Sidebar>
}

export default SideBar
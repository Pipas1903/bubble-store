import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {FaChevronDown} from "@react-icons/all-files/fa/FaChevronDown";
import SecondDropdown from '../SecondDropdown';

const Div = styled.div`
  &.dropdown {
    position: relative;
    border-bottom: 1px solid rgba(255, 255, 255, 0.48);
    padding: 15px;
    transition: all linear 500ms;
    color: white;
    font-size: 20px;
  }

  &.inside-dpdn {
    position: relative;
    padding: 15px;
    transition: all linear 500ms;
    font-size: 18px;
  }

  &.dropdown-menu, &.inner-dpdn-menu {
    position: absolute;
    left: 30px;
    top: calc(100% + 10px);
    z-index: 2;
    display: none;
    transition: all ease-in-out 300ms;
  }

  &.dropdown-menu.drop, &.inner-dpdn-menu.drop {
    display: block;
  }
`;

const Category = styled.button`
  font-size: inherit;
  text-decoration: none;
  color: inherit;
  font-family: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all linear 300ms;

  &:hover {
    color: black;
  }
`;

const Arrow = styled(FaChevronDown)`
  color: white;
  position: absolute;
  left: 90%;
  top: 20px;
  transition: all linear 300ms;
  width: 16px;
  height: 16px;

  &.drop {
    transform: rotate(180deg);
  }
`;

interface content {
    level2: string[],
    level3: string[],
    name: string,
    parentState: boolean,
    setParentState: () => void
}

const Dropdown = ({name, level2, level3, parentState, setParentState}: content) => {
    const [show1dpdn, setShow1dpdn] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (!parentState)
            setShow1dpdn(false)
    }, [parentState])

    const toggleDropdown = () => {
        setShow1dpdn((prevState => !prevState))
    }
    const travel = (e: React.BaseSyntheticEvent) => {
        setParentState();
        navigate(`/category/${e.target.value}`)
    }

    return <>
        <Div className="dropdown">
            <Category value={name} onClick={(e) => travel(e)}>{name}</Category>
            <Arrow className={show1dpdn ? "drop" : "arrow"} onClick={toggleDropdown}/>
            <Div className={show1dpdn ? "drop" : "dropdown-menu"}>
                <SecondDropdown setParentState={setParentState}
                                parentState={parentState}
                                subcategory={level2[0]}
                                level3={level3}
                                name={name}
                />
                <SecondDropdown setParentState={setParentState}
                                parentState={parentState}
                                subcategory={level2[1]}
                                level3={level3}
                                name={name}
                />
            </Div>
        </Div>
    </>

}

export default Dropdown;
import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {FaChevronDown} from "@react-icons/all-files/fa/FaChevronDown";

const Div = styled.div`
  &.inside-dpdn {
    position: relative;
    padding: 15px;
    transition: all linear 500ms;
    font-size: 18px;
  }

  &.inner-dpdn-menu {
    position: absolute;
    left: 30px;
    top: calc(100% + 10px);
    z-index: 2;
    display: none;
    transition: all ease-in-out 300ms;
  }

  &.drop {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
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

  &.link {
    margin-top: 10px;
    margin-left: 10px;
  }

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
    subcategory: string,
    level3: string[],
    name: string,
    parentState: boolean,
    setParentState: () => void
}

const SecondDropdown = ({subcategory, level3, name, parentState, setParentState}: content) => {
    const [show2dpdn, setShow2dpdn] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (!parentState)
            setShow2dpdn(false)

    }, [parentState])

    const toggleSecondDpdn = () => {
        setShow2dpdn((prevState => !prevState))
    }
    const travel = (e: React.BaseSyntheticEvent) => {
        setParentState();
        navigate(`/category/${e.target.value}`)
    }

    return <>
        <Div className="inside-dpdn">
            <Category value={`${name}/${subcategory}`} onClick={travel}>{subcategory}</Category>
            <Arrow className={show2dpdn ? "drop" : "arrow"} onClick={toggleSecondDpdn}/>
            <Div className={show2dpdn ? "drop" : "inner-dpdn-menu"}>
                <Category
                    className="link"
                    value={`${name}/${subcategory}/${level3[0]}`}
                    onClick={travel}>
                    {level3[0]}
                </Category>
                <Category
                    className="link"
                    value={`${name}/${subcategory}/${level3[1]}`}
                    onClick={travel}>
                    {level3[1]}
                </Category>
            </Div>
        </Div></>

}
export default SecondDropdown;
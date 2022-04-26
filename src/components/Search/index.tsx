import react, {useState, useEffect, BaseSyntheticEvent} from "react";
import {Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import AllProducts from "../../products.json";
import {ProdJson} from "../Pagination";
import {BiSearch} from "@react-icons/all-files/bi/BiSearch";

const Input = styled.input`
  font-family: inherit;
  color: white;
  padding: 5px;
  font-size: 15px;
  cursor: pointer;
  background-color: transparent;
  border: none;

  &::placeholder {
    color: #E1519E;
  }

  &:focus {
    outline: none;
  }
`;
const Div = styled.div`
  &.container {
    padding: 15px;
    display: flex;
    flex-direction: column;
    width: inherit;
  }

  &.menu {
    position: absolute;
  }

  &.inputs {
    background-color: rgba(248, 210, 224, 0.18);
    border: 2px solid #E1519E;
    display: flex;
    align-items: center;
    border-radius: 8px;
  }
`;
const Drop = styled.div`
  flex-direction: column;
  position: relative;
  background-color: #3a3939;
  z-index: 3;
  overflow: hidden;
  overflow-y: auto;
  height: 170px;
  width: available;
  border-radius: 8px;
  width: 221px;

  &.information {
    display: none;
  }

  &.open {
    display: flex;
  }
`;
const SearchResult = styled.button`
  font-family: inherit;
  color: white;
  background-color: transparent;
  padding: 5px 0 5px 5px;
  cursor: pointer;
  border: none;
  text-align: left;
  font-size: 15px;
`;

interface props {
    parentState: boolean,
    setParentState: () => void
}

const Search = ({parentState, setParentState}: props) => {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState(Object.values(AllProducts));
    const [openDrop, setOpenDrop] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!parentState) {
            setOpenDrop(false);
            setSearch("");
        }
        const unfiltered = Object.values(AllProducts);
        const filtered = unfiltered.filter(prod => prod.name.toUpperCase().includes(search));
        setProducts(filtered)
    }, [parentState, search])

    const getProdId = (name: string) => {
        // @ts-ignore
        return Object.keys(AllProducts).find(key => AllProducts[key].name === name);
    }
    const toggleDrop = () => {
        setOpenDrop(prev => !prev);
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value.toUpperCase())
    }
    const travel = (e: React.BaseSyntheticEvent) => {
        navigate("/products/" + e.target.value);
        setParentState();
    }

    return <Div className="container">
        <Div className="menu">
            <Div className="inputs">
                <Input type="text"
                       value={search}
                       placeholder="search product name"
                       onChange={(e) => handleChange(e)}
                       onClick={toggleDrop}/>
                <BiSearch color="#5284cf" size="28px"/>
            </Div>
            <Drop className={openDrop ? "open" : "information"}>
                {products.map(el => <SearchResult key={el.name}
                                                  value={getProdId(el.name)}
                                                  type="button"
                                                  onClick={travel}
                >{el.name}</SearchResult>)}
            </Drop>
        </Div>
    </Div>
}

export default Search;
import React from "react";
import {Outlet} from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: white`;

const CategoryProductListPage = () => {
    return <StyledDiv>
        <Outlet/>
    </StyledDiv>;
}
export default CategoryProductListPage;
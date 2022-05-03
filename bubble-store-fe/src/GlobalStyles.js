import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: black;
    //font-family: 'Roboto Condensed', sans-serif;
    font-family: 'Bubbler One', sans-serif;
  }

  #root {
    height: 100vh;
  }

  .main {
    display: flex;
    flex-flow: column;
    height: 100%;
  }

  .App {
    flex: 0 1 auto;
  }

  .outlet {
    display: flex;
    flex: 1 1 auto;
    flex-grow: 1;
    justify-content: center;
    width: 100%;
  }

  .footer-container {
    flex: 0 1 30px;
  }

`;
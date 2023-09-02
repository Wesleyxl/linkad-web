import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #f3f2f0;
    -webkit-font-smoothing: antialiased;
    color: #000;
    font-family: 'Urbanist', sans-serif;
  }
`;

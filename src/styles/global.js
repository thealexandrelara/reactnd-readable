import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, #root {
    background-color: #323d64;
    height: 100%;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Montserrat', sans-serif;
  }
  input, button {
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --black: #000;
    --white: #FFF;
    --gray: #DCDCDC;
  }
  *{
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
  }
  body{
    margin: 0;
    padding: 0;
    
    background-color: var(--white);
    h1, h2{
      color: var(--black);
    }
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  body{
    font-family: 'Noto Sans KR', sans-serif;
    font-family: 'Roboto', sans-serif;
    word-break: keep-all;
  }
  li{
    list-style-type:none;
  }
  a{
    text-decoration: none;
    color: black;
    font-size: 16px; 
    font-weight: 400; 
  }
  a:hover{
    color: white;
  }
  `;

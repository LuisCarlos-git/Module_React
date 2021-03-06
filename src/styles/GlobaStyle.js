import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  .flip {
    border-radius: 5px;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    max-height: 100%;
  }

  body {
    background: #7159c1;
    -webkit-font-smoolthing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
  }

  button {
    cursor: pointer;
  }
`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-image: radial-gradient(circle at center, #efeaf7 30%, #d3c5e8 100%);
    -webkit-font-smoothing: antialiased;

    max-width: 1386px;
    max-height: 1276px;
  }

  body, input, button {
    font-size: 18px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
    outline: 0;
    border: 0;
  }

  input {
    outline: 0;
  }
`;

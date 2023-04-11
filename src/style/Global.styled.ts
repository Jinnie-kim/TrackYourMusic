import { css } from '@emotion/react';

export const GlobalStyle = css`
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Love Ya Like A Sister', cursive;
  }

  #root {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  button,
  textarea,
  input {
    font-family: inherit;
    font-size: 16px;
  }

  button:focus,
  button:active,
  input:focus,
  input:active,
  textarea:focus,
  textarea:active {
    box-shadow: none;
    outline: none;
  }

  ul,
  ol,
  li {
    list-style-type: none;
  }
`;

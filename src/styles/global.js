import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --text: #fafafa;
    --background: #1a1919;
    --primary: #858683;
    --secondary: #0d0d0d;
    --accent: #737274;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  * {
    margin: 0;
    outline: transparent;
    border: none;
    color: var(--text);
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  html,
  body {
    height: 100vh;
    background-color: var(--background);
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  #root,
  #__next {
    isolation: isolate;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  table, tr, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }


`;

export default GlobalStyle;

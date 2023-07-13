import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --text: #fefafa;
    --background: #2b2b2b;
    --primary: #19e5e6;
    --secondary: #07213c;
    --accent: #27e787;
    --hover: #363636;
    --tiber: #093232;
    --algae: #75f0b3;
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 400;
    src:url('/src/fonts/poppins-regular-webfont.woff2') format('woff2'),
        url('/src/fonts/poppins-regular-webfont.woff') format('woff');
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
    font-family: 'Poppins';
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    overflow: hidden;
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

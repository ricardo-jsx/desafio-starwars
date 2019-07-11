import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
  fontFamily: 'Star Jedi',
  darkColor: '#262626',
  lightColor: '#efefed',
  orangeColor: '#f6ae2d',
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Star Jedi';
    src: url('/fonts/StarJedi.woff2') format('woff2'),
        url('/fonts/StarJedi.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    overflow: hidden;
    margin: 0;
  }

  #root {
    max-width: 100%;
    max-height: 100%;
  }
`;

const StyledTheme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);

export default StyledTheme;

import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import StarJedi_woff from './fonts/StarJedi.woff';
import StarJedi_woff2 from './fonts/StarJedi.woff2';
import StarJedi_ttf from './fonts/StarJedi.ttf';

const theme = {
  fontFamily: 'Star Jedi',
  darkColor: '#262626',
  lightColor: '#efefed',
  orangeColor: '#f6ae2d',
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Star Jedi';
    src: url(${StarJedi_woff2}) format('woff2'),
        url(${StarJedi_woff}) format('woff'),
        url(${StarJedi_ttf}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    margin: 0;
  }

  #root {
    position: relative;
    width: 100%;
    height: 100%;
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

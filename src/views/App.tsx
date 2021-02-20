import React, { ReactElement } from 'react';
import RouterPoint from '../router/router';
import Header from '../components/header';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

const App = (): ReactElement => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <>
        <Header />
        <RouterPoint />
      </>
    </React.Fragment>
  );
};

export default App;

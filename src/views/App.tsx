import React, { ReactElement } from 'react';
import RouterPoint from '../router/router';
import Header from '../components/header';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import store from '../store';

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
      <Provider store={store}>
        <>
          <Header />
          <RouterPoint />
        </>
      </Provider>
    </React.Fragment>
  );
};

export default App;

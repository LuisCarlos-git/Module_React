import React from 'react';

import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyle from './styles/GlobaStyle';

function App() {
  return (
    <>
      <Routes />
      <ToastContainer autoClose={2000} toastClassName="flip" />
      <GlobalStyle />
    </>
  );
}

export default App;

import React, { useEffect, useState, Fragment } from 'react';

// Global Styles
import { GlobalStyles } from './styles/GlobalStyle';

// Pages
import Home from './pages/home';

// CommandBar Hooks
import useCommandBar from './hooks/useCommandBar';

const App = ({ Component, props }: any) => {
  
  // Initialized CommandBar
  useCommandBar();

  return (
    <Fragment>
      <GlobalStyles />
      <Home />
    </Fragment>
  )
}

export default App;
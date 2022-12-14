//React imports
import React, { ReactElement } from 'react';
//other third party imports
import { useRoutes } from 'react-router-dom';
// local imports
import * as url from './constants/urlConstant';
import ErrorBoundary from './modules/Common/ErrorBoundary/ErrorBoundary';
import Home from './modules/Home/Home';
import Search from './modules/Search/Search';


function App(): ReactElement | null {
  // routing configurations
  const element = useRoutes([
    { path: url.HOME, element: <Home /> },
    { path: url.SEARCH, element: <Search /> },
  ]);

  // use ErrorBoundary in case of bug in the application
  return <ErrorBoundary>
    {element}
  </ErrorBoundary>;
}

export default App;

//React imports
import React, { ReactElement } from 'react';
//other third party imports
import { useRoutes } from 'react-router-dom';
// local imports
import * as url from './constants/urlConstant';
import Home from './modules/Home/Home';


function App(): ReactElement | null {
  const element = useRoutes([
    { path: url.HOME, element: <Home /> },
  ]);

  return element;
}

export default App;

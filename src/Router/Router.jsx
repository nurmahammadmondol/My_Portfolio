import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../Components/Home/HomePage';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>,
    // errorElement: <h4>Error 404</h4>,
    children: [
      {
        path: '/',
        element: <h5>nur</h5>,
      },
    ],
  },
]);

export default Router;

import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../Components/Home/HomePage';
import About from '../Components/Main/About/About';
import Skills from '../Components/Main/Skills/Skills';
import Education from '../Components/Main/Education/Education';
import Projects from '../Components/Main/Projects/Projects';
import Contact from '../Components/Main/Contact/Contact';
import DetailsPage from '../Components/Main/Projects/DetailsPage';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>,
    // errorElement: <h4>Error 404</h4>,
    children: [
      {
        path: '/',
        element: <About></About>,
      },
      {
        path: '/skills',
        element: <Skills></Skills>,
      },
      {
        path: '/details/:id',
        element: <DetailsPage></DetailsPage>,
        loader: ({ params }) =>
          fetch(
            `https://my-portfolio-seven-gamma-85.vercel.app/projects/${params.id}`
          ),
      },
      {
        path: '/projects',
        element: <Projects></Projects>,
      },
      {
        path: '/education',
        element: <Education></Education>,
      },

      {
        path: '/contact',
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default Router;

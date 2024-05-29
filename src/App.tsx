import React from 'react';

import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AboutCroatiaPage from './pages/AboutCroatiaPage';
import Planning from './components/Planning';
import PlanningPage from './pages/PlanningPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/croatia',
    element: <AboutCroatiaPage />,
  },
  {
    path: '/planning',
    element: <PlanningPage />,
  },
  {
    path: '/review',
    element: <AboutCroatiaPage />,
  },
  {
    path: '/media',
    element: <AboutCroatiaPage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

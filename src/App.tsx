import React from 'react';

import './App.css';
import { AppContextProvider } from './store/AppContextProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AboutCroatiaPage from './pages/AboutCroatiaPage';
import PlanningPage from './pages/PlanningPage';
import MediaPage from './pages/MediaPage';
export type Profile = {
  picture: string;
  name: string;
  email: string;
};

export type User = {
  access_token: string;
};

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
    path: '/zjisti, která lokalita je pro tebe ta pravá',
    element: <PlanningPage />,
  },
  {
    path: '/media',
    element: <MediaPage />,
  },
]);

function App() {
  return (
    <AppContextProvider>
      <div>
        <RouterProvider router={router} />
      </div>
    </AppContextProvider>
  );
}

export default App;

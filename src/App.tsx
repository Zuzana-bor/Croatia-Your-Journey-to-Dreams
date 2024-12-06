import './App.css';
import { AppContextProvider } from './store/AppContextProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AboutCroatiaPage from './pages/AboutCroatiaPage';
import PlanningPage from './pages/PlanningPage';
import MediaPage from './pages/MediaPage';
import ErrorPage from './pages/ErrorPage';

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
    errorElement: <ErrorPage />,
  },
  {
    path: '/croatia',
    element: <AboutCroatiaPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/planning',
    element: <PlanningPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/review',
    element: <AboutCroatiaPage />,
    errorElement: <ErrorPage />,
  },

  {
    path: '/zjisti, která lokalita je pro tebe ta pravá',
    element: <PlanningPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/media',
    element: <MediaPage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  );
}

export default App;

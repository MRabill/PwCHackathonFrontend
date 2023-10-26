import React, { lazy, Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/main.css';

const queryClient = new QueryClient();

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Integration = lazy(() => import('./pages/Integration'));
const Overview = lazy(() => import('./pages/Overview'));
const User = lazy(() => import('./pages/User'));
const Navbar = lazy(() => import('./components/Navbar'));
const BarLoader = lazy(() => import('./pages/Basic/BarLoader'));
const Map = lazy(() => import('./pages/Map'));

const Loading = () => {
  return <div>Loading...</div>;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = 2000; // 2 seconds in milliseconds

    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Overview />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
    {
      path: '/integration',
      element: <Integration />,
    },
    {
      path: '/User',
      element: <User />,
    },
    {
      path: '/Map',
      element: <Map />,
    },
  ]);

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<BarLoader />}>
          {isLoading ? (
            <BarLoader />
          ) : (
            <>
              <Navbar />
              <RouterProvider router={router} />
            </>
          )}
        </Suspense>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

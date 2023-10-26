import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/main.css';

const queryClient = new QueryClient();

// const FirstPage = lazy(() => import('./pages/Firstpage'))
// const SecondPage = lazy(() => import('./pages/SecondPage'))
// const ThirdPage = lazy(() => import('./pages/ThirdPage'))
// const SpringModal = lazy(() => import('./pages/SpringModal'))

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Integration = lazy(() => import('./pages/Integration'));
const Overview = lazy(() => import('./pages/Overview'));
const User = lazy(() => import('./pages/User'));
const Navbar = lazy(() => import('./components/Navbar'));

const Loading = () => {
  return <div>Loading...</div>;
};

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
  // {
  //   path: "/react_front_template",
  //   element: <ThirdPage/>,
  //   children: [
  //     {
  //       path: "/react_front_template/",
  //       element: <SecondPage/>,
  //     },
  //     {
  //       path: "/react_front_template/test",
  //       element: <FirstPage/>,
  //     },

  //   ]
  // }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>
);

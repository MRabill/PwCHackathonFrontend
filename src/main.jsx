import React, { lazy, Suspense }  from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "react-query";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/main.css';


const queryClient = new QueryClient();

const FirstPage = lazy(() => import('./pages/Firstpage'))
const SecondPage = lazy(() => import('./pages/SecondPage'))
const ThirdPage = lazy(() => import('./pages/ThirdPage'))
const SpringModal = lazy(() => import('./pages/SpringModal'))

const Loading = () => {
  return <div>Loading...</div>; 
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage/>,
  },
  {
    path: "/first",
    element: <SpringModal/>,
  },
  {
    path: "/second",
    element: <SecondPage/>,
  },
  {
    path: "/third/:id",
    element: <ThirdPage/>,
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Suspense fallback={<Loading />}>
    <RouterProvider router={router} /> 
</Suspense>

    </QueryClientProvider>
    
  </React.StrictMode>
);



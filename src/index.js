import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import Body from './Components/Body';
import ErrorPage from "./Components/ErrorPage";

const AppLayout = () => {
  return (
    <React.Fragment>
    <Outlet/>
    </React.Fragment>
    )
}

const routerConfig = createBrowserRouter([
{
  path:"/",
  element:<AppLayout/>,
  children:[
    {
      path:"/",
      element:<Body/>
    }
  ],
  errorElement: <ErrorPage />,
}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routerConfig}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';
import ErrorPage from "./error-page";
import Blog from './routes/blog'

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "blogs/:blogId",
    element: <Blog />,
    errorElement: <ErrorPage />
  },
]);


ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

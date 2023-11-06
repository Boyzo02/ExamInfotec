import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import App from './App';
import NewBudget from "./NewBudget";
import SeeLast from "./SeeLast";
import * as serviceWorker from './serviceWorker';

import './custom.scss';
const routes = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
    },
    {
        path:"/budget",
        element: <NewBudget/>,
    },
    {
      path:"/seelast",
      element: <SeeLast/>,
    }

  ]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={routes}/>
    </React.StrictMode>
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

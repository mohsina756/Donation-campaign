import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Components/Root";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Alldonation from "./Components/Alldonation";
import Statistics from "./Components/Statistics";
import Details from "./Components/Details";
import ErrorPage from "./Components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/all",
        element: <Alldonation></Alldonation>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/stat",
        element: <Statistics></Statistics>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

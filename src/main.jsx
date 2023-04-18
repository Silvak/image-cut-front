import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//page
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import SplitTool from "./pages/SplitTool";
import PickImage from "./pages/PickImage";
import Login from "./pages/Login";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/split-tool",
        element: <SplitTool />,
      },
      {
        path: "/pick/",
        element: <PickImage />,
      },
      {
        path: "/pick/:id",
        element: <PickImage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

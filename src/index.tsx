import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.tsx";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ticket from "./pages/Ticket.tsx";
import Profile from "./pages/Profile.tsx";
import Home from "./pages/Home.tsx";
import ErrorNotFoundPage from "./pages/ErrorNotFoundPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorNotFoundPage />,
  },
  {
    path: "/tickets",
    element: <Ticket />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

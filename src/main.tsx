import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "@pages/Home";
import Translation from "@pages/Translation";
import Convert from "@pages/Convert";
import Stadiums from "@pages/Stadiums";
import StadiumId from "@pages/StadiumId";
import Contact from "@pages/Contact";
import Map from "@pages/Map";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/stadiums", element: <Stadiums /> },
      { path: "/stadiums/:id", element: <StadiumId /> },
      { path: "/translation", element: <Translation /> },
      { path: "/convert", element: <Convert /> },
      { path: "/map", element: <Map /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

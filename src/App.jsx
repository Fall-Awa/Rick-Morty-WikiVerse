import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Episodes from "./components/Episodes";
import Home from "./components/Home";

import "./App.css";
import CardDetails from "./components/Card/CardDetails";
import Characters from "./components/Characters";
import Locations from "./components/Locations";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "Characters",
          element: <Characters />,
        },
        {
          path: "Episodes",
          element: <Episodes />,
        },
        {
          path: "Locations",
          element: <Locations />,
        },
        {
          path: ":id",
          element: <CardDetails />,
        },
        {
          path: "episodes/:id",
          element: <CardDetails />,
        },
        {
          path: "location/:id",
          element: <CardDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

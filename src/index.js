import React from "react";
import ReactDOM from "react-dom/client";

// import { Wrapper } from "./components/Wrapper";
import { Homepage } from "./Homepage";
import History from "./History";
import Demo from "./Demo";
import Algorithm from "./Algorithm";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/demo",
    element: <Demo />,
  },
  {
    path: "/algorithm",
    element: <Algorithm />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePages = lazy(() => import("@/pages/Home"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePages />,
  },
  {
    path: "/makrab",
    element: <>Makrab</>,
  },
  {
    path: "/about",
    element: <>Agenda</>,
  },
  {
    path: "/icc",
    element: <>ICC Event</>,
  },
]);

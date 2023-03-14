import NotFoundError from "@/pages/Error/NotFound";
import EventPages from "@/pages/Event";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePages = lazy(() => import("@/pages/Home"));
const AboutPages = lazy(() => import("@/pages/About"));

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
    element: <AboutPages />,
  },
  {
    path: "/icc",
    element: <EventPages />,
  },
  {
    path: "*",
    element: <NotFoundError />,
  },
]);

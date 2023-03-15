import NotFoundError from "@/pages/Error/NotFound";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePages = lazy(() => import("@/pages/Home"));
const AboutPages = lazy(() => import("@/pages/About"));
const EventPages = lazy(() => import("@/pages/Event"));
const ICCPages = lazy(() => import("@/pages/Event/ICC"));
const MakrabPages = lazy(() => import("@/pages/Event/Makrab"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePages />,
  },
  {
    path: "/about",
    element: <AboutPages />,
  },
  {
    path: "/events",
    element: <EventPages />,
    children: [
      {
        path: "icc",
        element: <ICCPages />,
      },
      {
        path: "makrab",
        element: <MakrabPages />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundError />,
  },
]);

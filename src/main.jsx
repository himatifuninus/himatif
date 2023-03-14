import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "virtual:windi.css";
import "windi.css";
import "@/styles/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routers";
import Loading from "./components/molecules/Loading";
import { ErrorBoundary } from "react-error-boundary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<>Error in root </>}>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} fallbackElement={<Loading />} />
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>,
);

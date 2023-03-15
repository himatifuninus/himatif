import SuspenseError from "@/modules/Common/SuspenseError";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const EventModules = lazy(() => import("@/modules/Event"));

const EventPages = () => {
  return (
    <SuspenseError>
      <EventModules />
    </SuspenseError>
  );
};

export default EventPages;

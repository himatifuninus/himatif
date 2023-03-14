import { ErrorBoundary } from "react-error-boundary";
import { lazy, Suspense } from "react";
import Loading from "@/components/molecules/Loading";

const EventModules = lazy(() => import("@/modules/Event"));

const EventPages = () => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <EventModules />
      </Suspense>
    </ErrorBoundary>
  );
};

export default EventPages;

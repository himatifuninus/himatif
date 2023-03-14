import { ErrorBoundary } from "react-error-boundary";
import { lazy, Suspense } from "react";
import Loading from "@/components/molecules/Loading";

const HomeModules = lazy(() => import("@/modules/Home"));

const HomePages = () => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <HomeModules />
      </Suspense>
    </ErrorBoundary>
  );
};

export default HomePages;

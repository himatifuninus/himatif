import Loading from "@/components/molecules/Loading";
import { lazy, Suspense } from "react";

const AboutModules = lazy(() => import("@/modules/About"));

const AboutPages = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <AboutModules />
      </Suspense>
    </ErrorBoundary>
  );
};

export default AboutPages;

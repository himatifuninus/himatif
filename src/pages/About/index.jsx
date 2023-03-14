import Error from "@/components/molecules/Error";
import Loading from "@/components/molecules/Loading";
import { ErrorBoundary } from "react-error-boundary";
import { lazy, Suspense } from "react";

const AboutModules = lazy(() => import("@/modules/About"));

const AboutPages = () => {
  return (
    <ErrorBoundary fallback={<Error>Error when load About Pages</Error>}>
      <Suspense fallback={<Loading />}>
        <AboutModules />
      </Suspense>
    </ErrorBoundary>
  );
};

export default AboutPages;

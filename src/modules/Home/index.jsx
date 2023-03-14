import Loading from "@/components/molecules/Loading";
import Error from "@/components/molecules/Error";
import BaseLayout from "@/layouts/Base";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const HeadSection = lazy(() => import("@/modules/Home/HeadSection"));
const NewsSection = lazy(() => import("@/modules/Home/NewsSection"));

const HomeModules = () => {
  return (
    <BaseLayout>
      <ErrorBoundary fallback={<Error>Error when load Head Section</Error>}>
        <Suspense fallback={<Loading />}>
          <HeadSection />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<Error>Error when load News Section</Error>}>
        <Suspense fallback={<Loading />}>
          <NewsSection />
        </Suspense>
      </ErrorBoundary>
    </BaseLayout>
  );
};

export default HomeModules;

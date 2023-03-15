import Error from "@/components/molecules/Error";
import Loading from "@/components/molecules/Loading";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const SuspenseError = ({
  children,
  fallbackLoading = <Loading />,
  fallbackError = <Error>Error was happen</Error>,
}) => (
  <ErrorBoundary fallback={fallbackError}>
    <Suspense fallback={fallbackLoading}>{children}</Suspense>
  </ErrorBoundary>
);

export default SuspenseError;

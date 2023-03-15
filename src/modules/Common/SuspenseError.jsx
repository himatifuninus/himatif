const { default: Error } = require("@/components/molecules/Error");
const { default: Loading } = require("@/components/molecules/Loading");
const { Suspense } = require("react");
const { ErrorBoundary } = require("react-error-boundary");

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

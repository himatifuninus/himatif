import SuspenseError from "@/modules/Common/SuspenseError";
import { lazy } from "react";

const EventModules = lazy(() => import("@/modules/Event"));

const EventPages = () => {
  return (
    <SuspenseError>
      <EventModules />
    </SuspenseError>
  );
};

export default EventPages;

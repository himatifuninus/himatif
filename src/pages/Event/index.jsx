import SuspenseError from "@/modules/Common/SuspenseError";
import { lazy } from "react";
import { Outlet } from "react-router-dom";

const EventModules = lazy(() => import("@/modules/Event"));

const EventPages = () => {
  return (
    <SuspenseError>
      <EventModules>
        <Outlet />
      </EventModules>
    </SuspenseError>
  );
};

export default EventPages;

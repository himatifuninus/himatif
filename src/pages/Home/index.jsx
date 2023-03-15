import SuspenseError from "@/modules/Common/SuspenseError";
import { lazy } from "react";

const HomeModules = lazy(() => import("@/modules/Home"));

const HomePages = () => {
  return (
    <SuspenseError>
      <HomeModules />
    </SuspenseError>
  );
};

export default HomePages;

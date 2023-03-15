import { lazy } from "react";
import SuspenseError from "@/modules/Common/SuspenseError";

const ICCModules = lazy(() => import("@/modules/Event/ICC"));

const ICCPages = () => {
  return (
    <SuspenseError>
      <ICCModules />
    </SuspenseError>
  );
};

export default ICCPages;

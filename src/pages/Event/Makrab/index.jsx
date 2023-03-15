import { lazy } from "react";
import SuspenseError from "@/modules/Common/SuspenseError";

const MakrabModules = lazy(() => import("@/modules/Event/Makrab"));

const ICCPages = () => {
  return (
    <SuspenseError>
      <MakrabModules />;
    </SuspenseError>
  );
};

export default ICCPages;

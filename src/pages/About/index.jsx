import { lazy } from "react";
import SuspenseError from "@/modules/Common/SuspenseError";

const AboutModules = lazy(() => import("@/modules/About"));

const AboutPages = () => {
  return (
    <SuspenseError>
      <AboutModules />
    </SuspenseError>
  );
};

export default AboutPages;

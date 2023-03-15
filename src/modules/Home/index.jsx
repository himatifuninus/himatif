import BaseLayout from "@/layouts/Base";
import { lazy } from "react";
import ContentLayout from "@/layouts/Content";
import SuspenseError from "../Common/SuspenseError";

const HeadSection = lazy(() => import("@/modules/Home/HeadSection"));
const NewsSection = lazy(() => import("@/modules/Home/NewsSection"));
const EventSection = lazy(() => import("@/modules/Home/EventSection"));

const HomeModules = () => {
  return (
    <BaseLayout>
      <ContentLayout>
        <SuspenseError>
          <HeadSection />
        </SuspenseError>
        <SuspenseError>
          <NewsSection />
        </SuspenseError>
      </ContentLayout>
      <SuspenseError>
        <EventSection />
      </SuspenseError>
    </BaseLayout>
  );
};

export default HomeModules;

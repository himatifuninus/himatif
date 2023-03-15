import BaseLayout from "@/layouts/Base";
import ContentLayout from "@/layouts/Content";
import MainLayout from "@/layouts/Main";
import { Outlet } from "react-router-dom";

const EventModules = () => {
  return (
    <BaseLayout>
      <MainLayout>
        <ContentLayout>
          <Outlet />
        </ContentLayout>
      </MainLayout>
    </BaseLayout>
  );
};

export default EventModules;

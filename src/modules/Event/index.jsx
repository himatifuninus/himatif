import BaseLayout from "@/layouts/Base";
import ContentLayout from "@/layouts/Content";
import MainLayout from "@/layouts/Main";

const EventModules = () => {
  return (
    <BaseLayout>
      <MainLayout>
        <ContentLayout>
          <span>Event Page</span>
        </ContentLayout>
      </MainLayout>
    </BaseLayout>
  );
};

export default EventModules;

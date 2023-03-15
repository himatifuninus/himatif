import BaseLayout from "@/layouts/Base";
import ContentLayout from "@/layouts/Content";
import MainLayout from "@/layouts/Main";

const EventModules = ({ children }) => {
  return (
    <BaseLayout>
      <MainLayout>
        <ContentLayout>{children}</ContentLayout>
      </MainLayout>
    </BaseLayout>
  );
};

export default EventModules;

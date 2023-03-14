import BaseLayout from "@/layouts/Base";
import MainLayout from "@/layouts/Main";

const NotFoundError = () => (
  <BaseLayout>
    <MainLayout>
      <span className="text-uppercase text-blue-600 text-4xl font-bold">ERROR 404 NOT FOUND</span>
      <span>Halaman yang anda cari tidak dapat di temukan</span>
    </MainLayout>
  </BaseLayout>
);

export default NotFoundError;

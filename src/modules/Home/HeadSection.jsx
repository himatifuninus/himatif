import MainLayout from "@/layouts/Main";

const HeadSection = () => (
  <MainLayout>
    <div className="flex flex-col">
      <h1 className="text-blue-600 text-3xl text-center">Himatif</h1>
      <h1 className="text-blue-600 text-3xl text-center">Information Website</h1>
    </div>
    <p className="text-center text-1xl md:text-2xl">
      Himpunan Mahasiswa Teknik Informatika Universitas Islam Nusantara
    </p>
  </MainLayout>
);

export default HeadSection;

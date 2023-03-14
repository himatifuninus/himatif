const MainLayout = ({ children }) => {
  return (
    <section className="flex flex-col gap-y-4 justify-center items-center w-full h-full">
      {children}
    </section>
  );
};

export default MainLayout;

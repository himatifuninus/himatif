const Error = ({ children }) => {
  return (
    <section className="flex items-center h-full w-full justify-center">
      <span className="text-red-500 font-medium">{children}</span>
    </section>
  );
};

export default Error;

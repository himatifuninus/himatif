import Navbar from "@/components/molecules/Navbar";
import { Fragment } from "react";

const BaseLayout = ({ children, isCenter }) => {
  return (
    <Fragment>
      <Navbar />
      <section
        className={`flex flex-col items-start p-8 h-screen justify-start`}
      >
        {children}
      </section>
    </Fragment>
  );
};

export default BaseLayout;

import HamburgerMenuIcon from "@/components/atoms/Icons/HamburgerMenuIcon";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white sticky top-0 w-full flex justify-between border-1 shadow-md items-center p-4 z-10">
      <Link to="/">
        <figure className="flex gap-x-4 items-center">
          <figcaption className="text-uppercase font-medium text-2xl text-blue-600  order-2">
            HIMATIF
          </figcaption>
          <img loading="lazy" src="/logo.svg" alt="himatif" />
        </figure>
      </Link>
      <nav className="md:flex hidden items-center gap-x-4">
        <NavLink to={"/icc"} className={"text-gray-600 appearence-none"}>
          ICC
        </NavLink>
        <NavLink to={"/about"} className={"text-gray-600 appearence-none"}>
          About
        </NavLink>
        <NavLink to={"/makrab"} className={"text-gray-600 appearence-none"}>
          Makrab
        </NavLink>
      </nav>
      <nav className="md:hidden flex items-center gap-x-4">
        <HamburgerMenuIcon />
      </nav>
    </header>
  );
};

export default Navbar;

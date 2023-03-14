import DropdownIcon from "@/components/atoms/Icons/DropdownIcon";
import HamburgerMenuIcon from "@/components/atoms/Icons/HamburgerMenuIcon";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full flex justify-between border-1 shadow-md items-center p-4">
      <figure className="flex gap-x-4 items-center">
        <figcaption className="text-uppercase font-medium text-blue-600  order-2">
          HIMATIF
        </figcaption>
        <img loading="lazy" src="/logo.svg" alt="himatif" />
      </figure>
      <nav className="md:flex hidden items-center gap-x-4">
        <div className="flex gap-x-2 items-center">
          <DropdownIcon />
          <span>Agenda</span>
        </div>
        <div className="flex gap-x-2 items-center">
          <DropdownIcon />
          <span>About</span>
        </div>
      </nav>
      <nav className="md:hidden flex items-center gap-x-4">
        <HamburgerMenuIcon />
      </nav>
    </header>
  );
};

export default Navbar;

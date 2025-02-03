import { ChossedLink } from "./chossed-link";
import { Menu } from "./menu";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-10 flex justify-between items-center bg-secondary w-full p-4 border-t-2 border-light_secondary lg:top-14 lg:w-1/4 lg:max-w-64 lg:min-h-full">
      <ChossedLink />
      <Menu />
    </nav>
  );
};

export { NavBar };

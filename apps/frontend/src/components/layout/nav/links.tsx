"use client";

import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";
import { MenuLink } from "./menu-link";

const Links = () => {
  const path = usePathname();

  return (
    <>
      <ul className="absolute right-4 flex flex-col w-1/2 bg-secondary border-2 border-white lg:hidden">
        {navLinks.map((link, i) => (
          <MenuLink link={link} path={path} key={i} />
        ))}
      </ul>
      <ul className="hidden flex-col gap-2 w-full lg:flex">
        {navLinks.map((link, i) => (
          <MenuLink link={link} path={path} key={i} />
        ))}
      </ul>
    </>
  );
};

export { Links };

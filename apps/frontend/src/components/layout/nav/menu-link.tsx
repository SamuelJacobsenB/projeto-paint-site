import Link from "next/link";
import { NavLink } from "@core/types";

interface NavLinkProps {
  link: NavLink;
  path: string;
}

const MenuLink = ({ link, path }: NavLinkProps) => {
  return (
    <li
      className={`flex w-full h-10 text-white text-md p-2 cursor-pointer hover:bg-light_secondary hover:underline ${
        path === link.href &&
        "bg-primary text-black cursor-default hover:bg-primary hover:no-underline"
      }`}
    >
      {path === link.href && <p className="w-full h-full"> {link.label}</p>}
      {path !== link.href && (
        <Link className="w-full h-full" href={link.href}>
          {link.label}
        </Link>
      )}
    </li>
  );
};

export { MenuLink };

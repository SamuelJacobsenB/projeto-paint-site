import { Roles } from "@core/enums";
import { NavLink } from "@core/types";

const navLinks: NavLink[] = [
  {
    label: "Início",
    href: "/",
    role: null,
  },
  {
    label: "Postagens",
    href: "/posts",
    role: null,
  },
  {
    label: "Usuários",
    href: "/users",
    role: null,
  },
  {
    label: "Gerenciar postagens",
    href: "/delete/posts",
    role: Roles.MANAGER,
  },
  {
    label: "Gerenciar contas",
    href: "/delete/accounts",
    role: Roles.ADMIN,
  },
  {
    label: "Promover",
    href: "/promote",
    role: Roles.ADMIN,
  },
];

export { navLinks };

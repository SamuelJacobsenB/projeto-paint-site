import { Roles } from "..";

export interface NavLink {
  label: string;
  href: string;
  role: Roles | null;
}

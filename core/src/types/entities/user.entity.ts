import { Painting, Post, Roles } from "..";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  posts?: Post[];
  paintings?: Painting[];
  roles: Roles[];
  verified: boolean;
  verify_token?: string;
  createdAt: Date;
  updatedAt: Date;
}

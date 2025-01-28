import { PaintingSize, User } from "..";

export interface Painting {
  id: string;
  title: string;
  art: string[];
  size: PaintingSize;
  author?: User;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}

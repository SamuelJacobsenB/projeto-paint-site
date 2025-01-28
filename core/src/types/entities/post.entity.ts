import { User } from "..";

export interface Post {
  id: string;
  title: string;
  paintingId: string;
  author?: User;
  authorId: string;
  views: number;
  views_ids: string[];
  createdAt: Date;
  updatedAt: Date;
}

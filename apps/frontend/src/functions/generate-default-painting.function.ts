import { PaintingSize } from "@core/types";

export const generateDefaultPainting = (size: PaintingSize): string[] => {
  const painting: string[] = [];

  for (let i = 0; i < Number(size) * Number(size); i++) {
    painting.push("ffffff");
  }

  return painting;
};

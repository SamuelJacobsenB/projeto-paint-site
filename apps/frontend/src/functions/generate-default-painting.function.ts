export const generateDefaultPainting = (size: string): string[] => {
  const painting: string[] = [];

  for (let i = 0; i < Number(size) ** 2; i++) {
    painting.push("ffffff");
  }

  return painting;
};

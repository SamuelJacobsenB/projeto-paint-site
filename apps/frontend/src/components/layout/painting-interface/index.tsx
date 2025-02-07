import { Painting } from "@core/types";
import { PaintingHeader } from "./painting-header";
import React from "react";

interface PaintingInterfaceProps {
  painting: Painting;
  art: string[];
  setArt: React.Dispatch<React.SetStateAction<string[]>>;
}

const PaintingInterface = ({
  painting,
  art,
  setArt,
}: PaintingInterfaceProps) => {
  return (
    <div className="flex flex-col w-full h-full">
      <PaintingHeader painting={painting} art={art} />
    </div>
  );
};

export { PaintingInterface };

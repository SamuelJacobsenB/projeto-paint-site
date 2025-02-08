"use client";

import React, { useState } from "react";
import { PaintingHeader } from "./painting-header";
import { Cursor, Painting } from "@core/types";

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
  const [selectedButton, setSelectedButton] = useState<Cursor>("default");
  const [color, setColor] = useState<string>("ffffff");

  return (
    <div className="flex flex-col w-full h-full">
      <PaintingHeader painting={painting} art={art} />
      <div className="flex flex-col w-full h-full lg:flex-row"></div>
    </div>
  );
};

export { PaintingInterface };

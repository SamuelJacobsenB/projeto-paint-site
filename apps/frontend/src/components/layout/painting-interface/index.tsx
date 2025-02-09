"use client";

import React, { useState } from "react";
import { PaintingHeader } from "./painting-header";
import { ButtonArea } from "./button-area";
import { ArtArea } from "./art-area";
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
  const [inputColor, setInputColor] = useState("#ffffff");

  return (
    <div className="flex flex-col w-full h-screen">
      <PaintingHeader painting={painting} art={art} />
      <div className="flex flex-1 flex-col w-full h-screen lg:flex-row">
        <ButtonArea
          setColor={setColor}
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
          inputColor={inputColor}
          setInputColor={setInputColor}
        />
        <ArtArea
          art={art}
          setArt={setArt}
          size={painting.size}
          color={color}
          setColor={setColor}
          selectedButton={selectedButton}
          setInputColor={setInputColor}
        />
      </div>
    </div>
  );
};

export { PaintingInterface };

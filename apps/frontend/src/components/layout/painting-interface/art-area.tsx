import React from "react";
import { Cursor, PaintingSize } from "@core/types";

interface ArtAreaProps {
  art: string[];
  setArt: React.Dispatch<React.SetStateAction<string[]>>;
  size: PaintingSize;
  selectedButton: Cursor;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

const ArtArea = ({
  art,
  setArt,
  size,
  selectedButton,
  color,
  setColor,
}: ArtAreaProps) => {
  const numberOfPixelInSide =
    size === "SMALL" ? 16 : size === "MEDIUM" ? 32 : 64;

  const pixelSize = size === "SMALL" ? 24 : size === "MEDIUM" ? 12 : 6;

  const handleClick = (evt: React.MouseEvent<HTMLDivElement>, i: number) => {
    const target = evt.target as HTMLDivElement;
    const updatedArt = [...art];

    switch (selectedButton) {
      case "pencil":
        updatedArt[i] = color;

        setArt(updatedArt);

        target.style.backgroundColor = "#" + color;

        break;
      case "eraser":
        updatedArt[i] = "ffffff";

        setArt(updatedArt);

        target.style.backgroundColor = "#ffffff";

        break;
      case "color-selector":
        setColor(target.style.backgroundColor.slice(1));

        break;
      default:
        break;
    }
  };

  return (
    <div
      className={`flex flex-grow justify-center items-center bg-light_secondary cursor-${selectedButton}`}
    >
      <div
        className="flex flex-wrap justify-around gap-px"
        style={{
          width:
            numberOfPixelInSide * pixelSize + numberOfPixelInSide - 1 + "px",
        }}
      >
        {art.map((color: string, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#" + color,
              width: pixelSize + "px",
              height: pixelSize + "px",
            }}
            title={art[i]}
            onClick={(evt) => handleClick(evt, i)}
          />
        ))}
      </div>
    </div>
  );
};

export { ArtArea };

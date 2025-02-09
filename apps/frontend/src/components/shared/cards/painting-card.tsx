import { serializeDate } from "@/functions";
import { Painting } from "@core/types";
import React from "react";

interface PaintingCardProps {
  painting: Painting;
  onClick?: () => void;
}

const PaintingCard = ({ painting, onClick }: PaintingCardProps) => {
  const numberOfPixelsInSide =
    painting.size === "SMALL" ? 16 : painting.size === "MEDIUM" ? 32 : 64;

  const pixelSize =
    painting.size === "SMALL" ? 10 : painting.size === "MEDIUM" ? 5 : 2;

  const date = serializeDate(painting.createdAt);

  return (
    <div className="flex flex-col justify-center gap-4 w-fit">
      <div
        className="relative flex flex-col justify-center items-center bg-white text-5xl w-48 h-72 cursor-pointer hover:bg-terciary"
        onClick={onClick}
      >
        <small className="absolute top-1 text-sm">{date}</small>
        <div
          className="flex flex-wrap border-2 border-black"
          style={{
            width: pixelSize * numberOfPixelsInSide + 4,
            height: pixelSize * numberOfPixelsInSide + 4,
          }}
        >
          {painting.art.map((pixelColor, i) => (
            <div
              style={{
                width: pixelSize + "px",
                height: pixelSize + "px",
                backgroundColor: "#" + pixelColor,
              }}
              key={i}
            />
          ))}
        </div>
      </div>
      <big className="text-lg text-center text-white">{painting.title}</big>
    </div>
  );
};

export { PaintingCard };

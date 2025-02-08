"use client";

import React, { useState } from "react";
import { Cursor } from "@core/types";
import { I } from "@/components/icons";

interface ButtonAreaProps {
  selectedButton: Cursor;
  setSelectedButton: React.Dispatch<React.SetStateAction<Cursor>>;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

const buttonStyle = "p-2 rounded hover:bg-light_secondary";
const selectedButtonStyle =
  "bg-primary text-black font-bold hover:cursor-default hover:bg-primary";

const ButtonArea = ({
  selectedButton,
  setSelectedButton,
  setColor,
}: ButtonAreaProps) => {
  const [inputColor, setInputColor] = useState("#ffffff");

  return (
    <div className="flex items-center justify-between bg-secondary text-white w-full p-2 border-t-2 border-light_secondary lg:h-full lg-flex-1 lg:flex-col lg:max-w-20">
      <div className="flex gap-2 text-2xl lg:flex-col">
        <button
          className={`${buttonStyle} ${
            selectedButton === "default" && selectedButtonStyle
          }`}
          onClick={() => setSelectedButton("default")}
        >
          <I.Cursor />
        </button>
        <button
          className={`${buttonStyle} ${
            selectedButton === "pencil" && selectedButtonStyle
          }`}
          onClick={() => setSelectedButton("pencil")}
        >
          <I.Pencil />
        </button>
        <button
          className={`${buttonStyle} ${
            selectedButton === "color-selector" && selectedButtonStyle
          }`}
          onClick={() => setSelectedButton("color-selector")}
        >
          <I.PickColor />
        </button>
        <button
          className={`${buttonStyle} ${
            selectedButton === "eraser" && selectedButtonStyle
          }`}
          onClick={() => setSelectedButton("eraser")}
        >
          <I.Eraser />
        </button>
      </div>
      <div className="p-2 hover:bg-light_secondary">
        <input
          type="color"
          name="color"
          id="color"
          className="cursor-pointer"
          value={inputColor}
          onChange={(evt) => {
            setInputColor(evt.target.value);
            setColor(evt.target.value.slice(1));
          }}
        />
      </div>
    </div>
  );
};

export { ButtonArea };

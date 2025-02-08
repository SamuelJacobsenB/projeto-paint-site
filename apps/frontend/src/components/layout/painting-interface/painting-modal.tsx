import React from "react";
import { Modal } from "@/components";
import { PaintingSize } from "@core/types";

interface PaintingModalProps {
  size: PaintingSize;
  art: string[];
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const PaintingModal = ({
  size,
  art,
  isModalVisible,
  setIsModalVisible,
}: PaintingModalProps) => {
  const numberOfPixelInSide =
    size === "SMALL" ? 16 : size === "MEDIUM" ? 32 : 64;

  const pixelSize = size === "SMALL" ? 20 : size === "MEDIUM" ? 10 : 5;

  return (
    <Modal
      isVisible={isModalVisible}
      setIsVisible={setIsModalVisible}
      className="text-black"
    >
      <h1 className="text-4xl mb-4">Pintura:</h1>
      <div
        className="flex flex-wrap m-auto border-2 border-black"
        style={{
          width: numberOfPixelInSide * pixelSize + 4 + "px",
          height: numberOfPixelInSide * pixelSize + 4 + "px",
        }}
      >
        {art.map((pixelColor, i) => (
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
    </Modal>
  );
};

export { PaintingModal };

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
  const pixelSize =
    size === "SMALL" ? "30px" : size === "MEDIUM" ? "16px" : "8px";

  return (
    <Modal isVisible={isModalVisible} setIsVisible={setIsModalVisible}>
      <h1 className="text-lg mb-6">Pintura:</h1>
      <div className="flex justify-center items-center bg-light_secondary p-4 m-auto rounded">
        {art.map((pixelColor, i) => (
          <div
            style={{
              width: pixelSize,
              height: pixelSize,
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

import React from "react";
import { ComponentWithChildren } from "@/types";
import { I } from "../icons";

interface ModalProps extends ComponentWithChildren {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

const Modal = ({
  isVisible,
  setIsVisible,
  className,
  children,
}: ModalProps) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed top-0 right-0 z-20 flex justify-center items-center bg-black bg-opacity-80 w-full h-screen p-8">
      <div className="flex flex-col gap-4 w-full max-w-xl">
        <div className="flex justify-center items-center bg-white text-3xl size-10 rounded-md">
          <button onClick={() => setIsVisible(false)}>
            <I.Close />
          </button>
        </div>
        <div className={`bg-white w-full p-2 rounded-sm ${className}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export { Modal };

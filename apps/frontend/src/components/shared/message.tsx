"use client";

import { useMessage } from "@/contexts";
import { I } from "..";

const Message = () => {
  const { message, type, hideMessage } = useMessage();

  if (!message) {
    return null;
  }

  return (
    <div
      className={`message-animation fixed top-6 right-6 z-30 flex justify-between items-center gap-4 ${
        type === "success" ? "bg-green-600" : "bg-red-600"
      } text-white text-lg p-2 px-4 rounded`}
    >
      <div className="flex items-center gap-2">
        {type === "success" && <I.Checkmark className="text-xl" />}
        {type === "error" && <I.Warning className="text-xl" />}
        {message}
      </div>
      <button onClick={hideMessage}>
        <I.Close className="text-xl" />
      </button>
    </div>
  );
};

export { Message };

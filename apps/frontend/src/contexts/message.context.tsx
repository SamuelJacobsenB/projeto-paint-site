"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { MessageType } from "@core/types";
import { ComponentWithChildren } from "@/types";

interface MessageContextProps {
  message?: string;
  type?: MessageType;
  showMessage: (msg: string, _type: MessageType) => void;
  hideMessage: () => void;
}

const messageContext = createContext({} as MessageContextProps);

export const MessageProvider = ({ children }: ComponentWithChildren) => {
  const [message, setMessage] = useState<string>();
  const [type, setType] = useState<MessageType>();

  const hideMessage = useCallback(() => {
    setMessage(undefined);
    setType(undefined);
  }, []);

  const showMessage = useCallback(
    (msg: string, _type: MessageType) => {
      setMessage(msg);
      setType(_type);

      setTimeout(() => {
        hideMessage();
      }, 6000);
    },
    [hideMessage]
  );

  return (
    <messageContext.Provider
      value={{ message, type, showMessage, hideMessage }}
    >
      {children}
    </messageContext.Provider>
  );
};

export const useMessage = () => useContext(messageContext);

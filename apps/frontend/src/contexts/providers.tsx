"use client";

import { MessageProvider } from ".";
import { ComponentWithChildren } from "@/types";

const Providers = ({ children }: ComponentWithChildren) => {
  return <MessageProvider>{children}</MessageProvider>;
};

export { Providers };

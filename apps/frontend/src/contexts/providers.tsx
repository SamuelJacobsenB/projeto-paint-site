"use client";

import { MessageProvider, UserProvider } from ".";
import { ComponentWithChildren } from "@/types";

const Providers = ({ children }: ComponentWithChildren) => {
  return (
    <UserProvider>
      <MessageProvider>{children}</MessageProvider>
    </UserProvider>
  );
};

export { Providers };

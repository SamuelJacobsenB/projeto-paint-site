"use client";

import { useState } from "react";
import { I } from "@/components";
import { Links } from "./links";

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <menu className="lg:flex lg:w-full lg:h-full">
      <button className="text-2xl text-white mx-2 lg:hidden">
        {isOpen && <I.Close onClick={() => setIsOpen(!isOpen)} />}
        {!isOpen && <I.Menu onClick={() => setIsOpen(!isOpen)} />}
      </button>
      <div className="hidden w-full lg:flex">
        <Links />
      </div>
      {isOpen && (
        <div className="flex w-full lg:hidden">
          <Links />
        </div>
      )}
    </menu>
  );
};

export { Menu };

"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";

const ChossedLink = () => {
  const path = usePathname();
  const [pathName, setPathName] = useState<string>();

  useEffect(() => {
    const _pathName = navLinks.find((link) => link.href === path);

    if (_pathName) {
      setPathName(_pathName.label);
    }
  }, [path]);

  if (!pathName) {
    return null;
  }

  return (
    <h2
      className="text-white text-lg mx-2 select-none lg:hidden"
      title="Página atual"
    >
      {pathName}
    </h2>
  );
};

export { ChossedLink };

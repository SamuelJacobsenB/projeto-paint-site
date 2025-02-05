import React from "react";
import { I } from "..";

interface LoaderProps {
  className?: string;
}

const Loader = ({ className }: LoaderProps) => {
  return <I.Loader className={`spinner size-10 ${className}`} />;
};

export { Loader };

import React from "react";
import { I } from "../icons";

interface LoaderProps {
  className?: string;
}

const Loader = ({ className }: LoaderProps) => {
  return <I.Loader className={`spin ${className}`} />;
};

export { Loader };

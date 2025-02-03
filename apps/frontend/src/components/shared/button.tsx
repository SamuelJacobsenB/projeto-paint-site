import { ButtonColor } from "@core/types";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  color: ButtonColor;
}

const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      className={`text-center text-lg p-2 px-4 rounded-md ${className}`}
      {...props}
    />
  );
};

export { Button };

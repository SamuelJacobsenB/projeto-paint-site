import React from "react";
import { ButtonColor } from "@core/types";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  color: ButtonColor;
}

const primaryStyles = "bg-primary hover:bg-dark_primary";
const secondaryStyles = "bg-light_secondary hover:bg-secondary";
const greenStyles = "bg-green-600 hover:bg-green-700";
const redStyles = "bg-red-600 hover:bg-red-700";

const Button = ({ className, color, ...props }: ButtonProps) => {
  const giveStyles = (): string => {
    let styles: string;

    switch (color) {
      case "primary":
        styles = primaryStyles;
        break;
      case "secondary":
        styles = secondaryStyles;
        break;
      case "green":
        styles = greenStyles;
        break;
      case "red":
        styles = redStyles;
        break;
      default:
        styles = primaryStyles;
    }

    return styles;
  };

  return (
    <button
      className={`text-center text-white text-lg p-2 px-4 rounded-md ${giveStyles()} ${className}`}
      {...props}
    />
  );
};

export { Button };

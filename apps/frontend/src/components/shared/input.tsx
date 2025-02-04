import React from "react";
import { InputColor } from "@core/types";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  color: InputColor;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
}

const primaryLabelStyles = "text-dark_primary";
const primaryInputStyles = "text-dark_primary focus:ring-primary";

const secondaryLabelStyles = "text-light_secondary";
const secondaryInputStyles = "text-secondary focus:ring-light_secondary";

const Input = ({
  label,
  color,
  className,
  id,
  value,
  setValue,
  ...props
}: InputProps) => {
  return (
    <div className={`${className}`}>
      <label
        className={`block text-sm font-bold ${
          color === "primary" && primaryLabelStyles
        } ${color === "secondary" && secondaryLabelStyles}`}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={`w-full py-2 px-3 text-md leading-tight shadow border-2 rounded transition-simple focus:outline-none focus:shadow-outline focus:ring-1 ${
          color === "primary" && primaryInputStyles
        } ${color === "secondary" && secondaryInputStyles}`}
        id={id}
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
        {...props}
      />
    </div>
  );
};

export { Input };

import React from "react";
import { InputColor } from "@core/types";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  color: InputColor;
  options: string[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
}

const primaryLabelStyles = "text-dark_primary";
const primarySelectStyles = "text-dark_primary focus:ring-primary";

const secondaryLabelStyles = "text-light_secondary";
const secondarySelectStyles = "text-secondary focus:ring-light_secondary";

const Select = ({
  label,
  color,
  className,
  id,
  options,
  value,
  setValue,
  ...props
}: SelectProps) => {
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
      <select
        className={`w-full py-2 px-3 text-md leading-tight shadow border-2 rounded cursor-pointer transition-simple focus:outline-none focus:shadow-outline focus:ring-1 ${
          color === "primary" && primarySelectStyles
        } ${color === "secondary" && secondarySelectStyles}`}
        id={id}
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
        {...props}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export { Select };

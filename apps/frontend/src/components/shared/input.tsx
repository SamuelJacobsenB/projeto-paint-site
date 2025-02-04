import { InputColor } from "@core/types";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  color: InputColor;
  className?: string;
}

const Input = ({ color, className, id, ...props }: InputProps) => {
  return (
    <div className={`${className}`}>
      <label className="block text-dark_primary text-sm font-bold" htmlFor={id}>
        Example Input
      </label>
      <input
        className="w-full py-2 px-3 text-dark_primary text-md leading-tight shadow border rounded transition-simple focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-primary"
        id={id}
        {...props}
      />
    </div>
  );
};

export { Input };

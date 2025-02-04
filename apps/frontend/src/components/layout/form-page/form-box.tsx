import React from "react";
import Image from "next/image";
import { ComponentWithChildren } from "@/types";

interface FormBoxProps extends ComponentWithChildren {
  title: string;
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
}

const FormBox = ({ title, onSubmit, children }: FormBoxProps) => {
  return (
    <div className="flex flex-col items-center gap-4 bg-white w-full max-w-lg p-6 rounded-md">
      <Image
        src={"/imgs/painting-logo-black.png"}
        alt="Logo"
        width={280}
        height={100}
      />
      <hr />
      <h1 className="text-3xl font-bold w-full px-4">{title}</h1>
      <form
        onSubmit={async (evt) => await onSubmit(evt)}
        className="flex flex-col items-center gap-4 w-full p-4"
      >
        {children}
      </form>
    </div>
  );
};

export { FormBox };

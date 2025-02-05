import React from "react";
import Image from "next/image";
import { Form } from "@/components";
import { ComponentWithChildren } from "@/types";

interface FormBoxProps extends ComponentWithChildren {
  title: string;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const FormBox = ({ title, ...props }: FormBoxProps) => {
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
      <Form {...props} />
    </div>
  );
};

export { FormBox };

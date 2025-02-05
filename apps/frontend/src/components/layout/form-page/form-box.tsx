"use client";

import React, { useState } from "react";
import Image from "next/image";
import { I, Loader } from "@/components";
import { ComponentWithChildren } from "@/types";

interface FormBoxProps extends ComponentWithChildren {
  title: string;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const FormBox = ({
  title,
  onSubmit,
  error,
  setError,
  children,
}: FormBoxProps) => {
  const [isLoading, setIsLoading] = useState(false);

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
        onSubmit={async (evt) => {
          setIsLoading(true);
          setError("");

          await onSubmit(evt).finally(() => setIsLoading(false));
        }}
        className="flex flex-col items-center gap-4 w-full p-4"
      >
        {isLoading ? (
          <div className="flex justify-center items-center w-full min-h-44">
            <Loader className="size-10" />
          </div>
        ) : (
          <>
            {error && (
              <div className="flex justify-between items-center gap-4 bg-red-600 text-white text-md w-full p-2 px-4 rounded">
                <div className="flex items-center gap-4">
                  <I.Warning className="text-xl" />
                  {error}
                </div>
                <button onClick={() => setError("")}>
                  <I.Close className="text-2xl" />
                </button>
              </div>
            )}
            {children}
          </>
        )}
      </form>
    </div>
  );
};

export { FormBox };

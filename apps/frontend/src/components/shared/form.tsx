"use client";

import React, { useState } from "react";
import { I, Loader } from "..";
import { ComponentWithChildren } from "@/types";

interface FormProps extends ComponentWithChildren {
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => Promise<void>;
  className?: string;
}

const Form = ({
  error,
  setError,
  onSubmit,
  className,
  children,
}: FormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <form
      onSubmit={async (evt) => {
        setIsLoading(true);
        setError("");

        await onSubmit(evt).finally(() => setIsLoading(false));
      }}
      className={`flex flex-col items-center gap-4 w-full p-4 ${className}`}
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
  );
};

export { Form };

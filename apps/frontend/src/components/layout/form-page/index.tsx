"use client";

import React from "react";
import { ComponentWithChildren } from "@/types";
import { FormLink } from "./form-link";
import { FormBox } from "./form-box";

interface FormPageProps extends ComponentWithChildren {
  title: string;
  icon?: React.ReactNode;
  href?: string;
  error?: string;
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const FormPage = ({
  title,
  icon,
  href,
  onSubmit,
  error,
  children,
}: FormPageProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-light_secondary min-w-full min-h-screen p-4">
      <FormLink icon={icon} href={href} />
      <FormBox title={title} onSubmit={onSubmit} error={error}>
        {children}
      </FormBox>
    </div>
  );
};

export { FormPage };

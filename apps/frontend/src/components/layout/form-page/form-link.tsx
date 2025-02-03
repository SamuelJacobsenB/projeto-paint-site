import React from "react";
import Link from "next/link";
import { I } from "@/components";

interface FormLinkProps {
  icon?: React.ReactNode;
  href?: string;
}

const FormLink = ({ icon = <I.Home />, href = "/" }: FormLinkProps) => {
  return (
    <div className="w-full max-w-lg">
      <div className="flex justify-center items-center bg-white text-black text-3xl size-12 rounded-md">
        <Link href={href}>{icon}</Link>
      </div>
    </div>
  );
};

export { FormLink };

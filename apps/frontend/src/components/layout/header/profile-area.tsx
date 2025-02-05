"use client";

import Link from "next/link";
import { useUser } from "@/contexts";

const ProfileArea = () => {
  const { user } = useUser();

  return (
    <div className="text-white text-md">
      {user ? (
        <h2>{user.name}</h2>
      ) : (
        <div className="flex gap-3">
          <Link href={"/login"}>Login</Link>
          <p className="select-none">|</p>
          <Link href={"/signup"}>Cadastrar</Link>
        </div>
      )}
    </div>
  );
};

export { ProfileArea };

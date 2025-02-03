import Link from "next/link";

const ProfileArea = () => {
  return (
    <div className="flex gap-3 text-white text-md">
      <Link href={"/login"}>Login</Link>
      <p className="select-none">|</p>
      <Link href={"/signup"}>Cadastrar</Link>
    </div>
  );
};

export { ProfileArea };

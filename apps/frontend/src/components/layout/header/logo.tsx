import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={"/imgs/painting-logo.png"}
        alt="Logo"
        width={200}
        height={80}
      />
    </Link>
  );
};

export { Logo };

import Image from "next/image";
import { Loader } from "..";

const LoadPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-secondary w-full h-screen">
      <Image
        src={"/imgs/painting-logo.png"}
        alt="Logo"
        width={380}
        height={160}
      />
      <Loader className="text-white" />
    </div>
  );
};

export { LoadPage };

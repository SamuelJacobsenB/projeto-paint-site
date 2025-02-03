import { Header, NavBar } from ".";
import { ComponentWithChildren } from "@/types";

const Layout = ({ children }: ComponentWithChildren) => {
  return (
    <>
      <Header />
      <div
        className="flex flex-col flex-wrap min-w-full min-h-full lg:flex-row lg:gap-8
      "
      >
        <NavBar />
        <div>{children}</div>
      </div>
    </>
  );
};

export { Layout };

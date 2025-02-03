import { Header, NavBar } from ".";
import { ComponentWithChildren } from "@/types";

const Layout = ({ children }: ComponentWithChildren) => {
  return (
    <>
      <Header />
      <div
        className="flex flex-col flex-wrap bg-secondary min-w-full min-h-full lg:flex-row
      "
      >
        <NavBar />
        <div className="flex-1 bg-light_secondary p-8">{children}</div>
      </div>
    </>
  );
};

export { Layout };

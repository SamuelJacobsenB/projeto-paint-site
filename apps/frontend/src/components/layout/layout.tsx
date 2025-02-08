import { Header, NavBar } from ".";
import { ComponentWithChildren } from "@/types";

const Layout = ({ children }: ComponentWithChildren) => {
  return (
    <>
      <Header />
      <div className="flex flex-1 flex-col bg-secondary w-full min-h-full lg:flex-row ">
        <NavBar />
        <div className="flex-grow bg-light_secondary w-full p-8">
          {children}
        </div>
      </div>
    </>
  );
};

export { Layout };

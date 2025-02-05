import { Header, NavBar } from ".";
import { ComponentWithChildren } from "@/types";

const Layout = ({ children }: ComponentWithChildren) => {
  return (
    <>
      <Header />
      <div className="flex flex-1 flex-col lg:flex-row bg-secondary w-full min-h-full">
        <NavBar />
        <div className="flex-grow bg-light_secondary w-full p-8">
          {children}
        </div>
      </div>
    </>
  );
};

export { Layout };

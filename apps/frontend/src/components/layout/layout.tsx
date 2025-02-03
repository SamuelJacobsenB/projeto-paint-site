import { Header } from ".";
import { ComponentWithChildren } from "@/types";

const Layout = ({ children }: ComponentWithChildren) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export { Layout };

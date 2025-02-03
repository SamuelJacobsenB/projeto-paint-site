import { Logo } from "./logo";
import { ProfileArea } from "./profile-area";

const Header = () => {
  return (
    <header className="flex justify-between items-center sticky w-full bg-secondary p-4 md:p-2">
      <Logo />
      <ProfileArea />
    </header>
  );
};

export { Header };

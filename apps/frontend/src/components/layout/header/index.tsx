import { Logo } from "./logo";
import { ProfileArea } from "./profile-area";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full bg-secondary p-4 lg:p-2 lg:sticky lg:top-0 lg:z-10 lg:h-16">
      <Logo />
      <ProfileArea />
    </header>
  );
};

export { Header };

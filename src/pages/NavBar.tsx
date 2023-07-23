import { Swords } from "lucide-react";
import { CreationSelector } from "../components";
import { ThemeChanger } from "../components/ui";

type Props = {
  setShownComponents: React.Dispatch<React.SetStateAction<string[]>>;
};

const NavBar = ({ setShownComponents }: Props) => {
  return (
    <nav className="flex h-16 w-full flex-row items-center space-x-4 border-b bg-background px-6 md:space-x-6 lg:px-12">
      <div className="flex flex-row items-center space-x-2">
        <Swords className="h-8 w-8" />
        <h1 className="mb-1 text-xl text-primary md:text-3xl">Playground!</h1>
      </div>
      <CreationSelector
        setShownComponents={setShownComponents}
        className="h-8 w-24 md:w-48 md:text-lg"
      />
      <div className="w-full">
        <ThemeChanger className="ml-auto justify-self-end" />
      </div>
    </nav>
  );
};

export default NavBar;

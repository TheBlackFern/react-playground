import { Swords } from "lucide-react";
import { CreationSelector } from "../components";
import { ThemeChanger } from "../components/ui";
import { TComponents } from "../App";

type Props = {
  shownComponents: TComponents;
  setShownComponents: React.Dispatch<React.SetStateAction<TComponents>>;
};

const NavBar = ({ shownComponents, setShownComponents }: Props) => {
  return (
    <nav className="flex h-16 w-full flex-row items-center border-b bg-background px-6 md:px-12 lg:px-24">
      <div className="flex flex-row items-center space-x-2">
        <Swords className="h-8 w-8" />
        <h1 className="mb-1 text-xl max-md:hidden md:text-3xl">Playground!</h1>
      </div>
      <CreationSelector
        shownComponents={shownComponents}
        setShownComponents={setShownComponents}
        className="ml-5 md:w-48 md:text-lg"
      />
      <div className="ml-auto">
        <ThemeChanger />
      </div>
    </nav>
  );
};

export default NavBar;

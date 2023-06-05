import NaughtsAndCrossesBoard from "./components/NaughtsAndCrossesBoard";
import RockPaperScissors from "./components/RockPaperScissors";
import PolyrhytmBoard from "./components/PolyrhytmBoard";
import ThemeChanger from "./components/ui/ThemeChanger";
import { Swords } from "lucide-react";
import { useTheme } from "./lib/utils";
import { useEffect } from "react";

function App() {
  const [theme, setTheme] = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <nav className="grid h-12 w-full grid-flow-col place-items-center justify-items-stretch space-x-4 border-b bg-background px-6 md:space-x-6 lg:px-12">
        <div className="flex flex-row items-center space-x-1">
          <Swords />
          <h1 className="text-xl text-primary">Playground!</h1>
        </div>
        <div className="ml-auto justify-center justify-self-end">
          <ThemeChanger theme={theme} setThemeStrategy={setTheme} />
        </div>
      </nav>
      <div className="relative flex h-full flex-col justify-center bg-background px-5 pt-5 text-primary transition-all duration-300 dark:bg-background dark:text-primary md:flex-row md:space-x-16 lg:space-x-28 xl:space-x-40">
        <div className="flex flex-col items-center">
          <h1 className="w-48 border-b pb-3 text-center text-xl">
            Naughts and crosses!
          </h1>
          <NaughtsAndCrossesBoard />
        </div>
        <div className="flex flex-col items-center text-center">
          <h1 className="w-48 border-b pb-3 text-center text-xl">
            Polyrithms!
          </h1>
          <PolyrhytmBoard />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="w-48 border-b pb-3 text-center text-xl">
            Rock-paper-scissors!
          </h1>
          <RockPaperScissors />
        </div>
      </div>
    </>
  );
}

export default App;

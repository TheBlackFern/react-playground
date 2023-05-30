import NaughtsAndCrossesBoard from "./components/NaughtsAndCrossesBoard";
import RockPaperScissors from "./components/RockPaperScissors";
import PolyrhytmBoard from "./components/PolyrhytmBoard";
import { useState } from "react";
import Button from "./components/ui/Button";
import { ReactComponent as Sun } from "./assets/svgs/sun.svg";
import { ReactComponent as Moon } from "./assets/svgs/moon.svg";

function App() {
  const isUserPrefDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [theme, setTheme] = useState(isUserPrefDark ? "dark" : "light");

  const handleChangeTheme = () => {
    setTheme((currentTheme) => {
      return currentTheme === "light" ? "dark" : "light";
    });
  };

  return (
    <div className={`${theme}`}>
      <div className="antialised relative flex h-full flex-col items-center space-y-10 bg-white p-10 text-slate-800 transition-all duration-300 dark:bg-slate-900 dark:text-slate-400">
        <h1 className="text-4xl">Playground!</h1>
        <Button
          onClick={handleChangeTheme}
          variant="alternative"
          className="absolute right-6 top-[-1.5rem] grid h-8 w-8 place-items-center"
        >
          <Moon
            className={`${
              theme === "dark" ? "scale-100" : "scale-0"
            } absolute h-7 w-7 p-1 transition-all duration-300`}
          />
          <Sun
            className={`${
              theme === "light" ? "scale-100" : "scale-0"
            } absolute h-7 w-7 p-1 transition-all duration-300`}
          />
        </Button>
        <PolyrhytmBoard />
        <NaughtsAndCrossesBoard />
        <RockPaperScissors />
      </div>
    </div>
  );
}

export default App;

import NaughtsAndCrossesBoard from "./components/NaughtsAndCrossesBoard";
import RockPaperScissors from "./components/RockPaperScissors";
import PolyrhytmBoard from "./components/PolyrhytmBoard";
import ThemeChanger from "./components/ui/ThemeChanger";
import { useTheme } from "./lib/utils";

function App() {
  const [theme, setTheme] = useTheme();

  return (
    <div className={`${theme}`}>
      <div className="relative flex h-full flex-col items-center space-y-10 bg-background p-10 text-primary transition-all duration-300 dark:bg-background dark:text-primary">
        <h1 className="text-4xl">Playground!</h1>
        <ThemeChanger
          className={"absolute right-10 top-[-1.5rem] "}
          theme={theme}
          setThemeStrategy={setTheme}
        />
        <PolyrhytmBoard />
        <NaughtsAndCrossesBoard />
        <RockPaperScissors />
      </div>
    </div>
  );
}

export default App;

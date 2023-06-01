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
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="absolute right-10 top-[-1.5rem] grid h-8 w-8 place-content-center"
            >
              {theme === "light" ? <Sun /> : <Moon />}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-32">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sun className="mr-2 h-4 w-4" />
                <span>Light</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Computer className="mr-2 h-4 w-4" />
                <span>System</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu> */}
        {/* <Button
          onClick={handleChangeTheme}
          variant="outline"
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
        </Button> */}
        <PolyrhytmBoard />
        <NaughtsAndCrossesBoard />
        <RockPaperScissors />
      </div>
    </div>
  );
}

export default App;

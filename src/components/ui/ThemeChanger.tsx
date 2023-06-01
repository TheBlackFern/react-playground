import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./Dropdown";
import { Button } from "./Button";
import { ReactComponent as Sun } from "../../assets/svgs/sun.svg";
import { ReactComponent as Moon } from "../../assets/svgs/moon.svg";
import { ReactComponent as Computer } from "../../assets/svgs/computer.svg";

interface ThemeChangerProps {
  theme: string;
  className: string;
  setThemeStrategy: (theme: string) => void;
}

const ThemeChanger: React.FC<ThemeChangerProps> = ({
  theme,
  className,
  setThemeStrategy,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={`${className} grid h-8 w-8 place-content-center`}
        >
          {theme === "light" ? <Sun /> : <Moon />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setThemeStrategy("light")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeStrategy("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeStrategy("system")}>
          <Computer className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeChanger;

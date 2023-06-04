import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./Dropdown";
import { Button } from "./Button";
import { Sun, Moon, Monitor } from "lucide-react";

interface ThemeChangerProps {
  theme: string;
  className?: string;
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
          {theme === "light" ? (
            <Sun className="h-6 w-6" strokeWidth={1.5} />
          ) : (
            <Moon className="h-6 w-6" strokeWidth={1.5} />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className={theme}>
        <DropdownMenuItem onClick={() => setThemeStrategy("light")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeStrategy("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeStrategy("system")}>
          <Monitor className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeChanger;

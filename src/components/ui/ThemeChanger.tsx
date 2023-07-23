import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./Dropdown";
import { Button } from "./";
import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "../../lib/utils";
import { useEffect } from "react";

interface ThemeChangerProps {
  className?: string;
}

const ThemeChanger: React.FC<ThemeChangerProps> = ({ className }) => {
  const [theme, setTheme] = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

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
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Monitor className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeChanger;

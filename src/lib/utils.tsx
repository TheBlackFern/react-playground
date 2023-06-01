import { clsx, type ClassValue } from "clsx";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useTheme(): [theme: string, setTheme: (theme: string) => void] {
  const isUserPrefDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [systemTheme, setSystemTheme] = useState(isUserPrefDark);
  const [theme, setTheme] = useState(isUserPrefDark ? "dark" : "light");
  const [themeStrategy, setThemeStrategy] = useState("system");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    if (mq.matches) {
      setSystemTheme(true);
    }
    mq.addEventListener("change", (e) => setSystemTheme(e.matches));
  }, []);

  useEffect(() => {
    switch (themeStrategy) {
      case "light":
        setTheme("light");
        break;
      case "dark":
        setTheme("dark");
        break;
      case "system":
        setTheme(systemTheme ? "dark" : "light");
    }
  }, [themeStrategy, systemTheme]);

  return [theme, setThemeStrategy];
}

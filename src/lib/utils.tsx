import { clsx, type ClassValue } from "clsx";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { PlayFunction } from "use-sound/dist/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Return a theme parameter, and a function for setting the theme strategy.
 */
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

/**
 * Returns an angle that gets updated over time.
 *
 * @param elapsedTime - time count reference
 * @param angularVelocity - velocity of the circular motion
 * @returns the angle value
 */
export function useRotation(
  elapsedTime: number,
  angularVelocity: number
): [angle: number] {
  const renderTime = 15;
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    setAngle((prev) => prev + (renderTime * angularVelocity) / 1000);
  }, [elapsedTime]);

  return [angle];
}

/**
 * Returns a boolean value for animation triggering.
 *
 * @param angle - an angle value
 * @param play - function for playing the sound.
 */
export function useCircleAnimation(
  angle: number,
  play: PlayFunction
): [lightUp: boolean] {
  // this is the angle of the next full revolution, so 180, 360, 540, 720, 1080...
  const [nextFullRevTime, setNextFullRevTime] = useState(180);
  const [lightUp, setLightUp] = useState(false);

  // This is the most reliable solution as when time is stopped we don't get lights and
  // sounds firing, but at the same time we are spot on with the timing. Also changing syncTime
  // doesn't affect anything (as apposed to having it be dependant on elapsed time and nextFullRevTime)
  useEffect(() => {
    if (angle >= nextFullRevTime) {
      play();
      setLightUp(true);
      setTimeout(() => {
        setLightUp(false);
      }, 400);
      setNextFullRevTime((prev) => prev + 180);
    }
  }, [angle]);

  return [lightUp];
}

/**
 * Returns last pressed key and its code.
 */
export function useKeyDown(): [string, string, boolean] {
  const [key, setKey] = useState("");
  const [code, setCode] = useState("");
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    function onKeyPress(e: KeyboardEvent) {
      const { key, code } = e;
      if (code.includes("Key")) {
        e.preventDefault();
      }
      setKey(key);
      setCode(code);
      setChanged((prev) => !prev);
    }
    window.addEventListener("keydown", onKeyPress);
    return () => {
      window.removeEventListener("keydown", onKeyPress);
    };
  }, []);

  return [key, code, changed];
}

/**
 * Generates an array of "length" size with random rotation and scale styles.
 */
export function generateStyles(length: number) {
  const randomStyles = [
    "rotate-12 scale-120",
    "-rotate-12 scale-100",
    "rotate-12 scale-75",
    "-rotate-12 scale-75",
    "rotate-24 scale-120",
    "-rotate-24 scale-100",
    "rotate-16 scale-100",
    "rotate-45 scale-120",
    "-rotate-16 scale-100",
    "-rotate-45 scale-120",
    "rotate-45 scale-75",
    "-rotate-45 scale-75",
    "rotate-16 scale-120",
    "rotate-16 scale-75",
    "-rotate-24 scale-75",
    "-rotate-16 scale-75",
    "rotate-24 scale-100",
    "-rotate-16 scale-120",
    "rotate-24 scale-75",
  ];

  const res: Array<string> = [];
  while (res.length < length) {
    res.push(randomStyles[Math.floor(Math.random() * randomStyles.length)]);
  }
  return res;
}

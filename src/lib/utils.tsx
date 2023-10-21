import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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

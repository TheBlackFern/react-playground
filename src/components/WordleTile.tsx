import { Color } from "./WordleRow";

type Props = {
  letter: string;
  done: boolean;
  colour: Color;
};

const WordleTile = ({ letter, done, colour }: Props) => {
  return (
    <div
      className={`flex h-9 w-9 items-center justify-center rounded-sm border-2 font-mono text-xl font-bold shadow-sm transition-all duration-300 dark:border dark:shadow-none sm:h-12 sm:w-12 sm:text-3xl ${
        done &&
        "text-white " +
          ((colour === "is" && "bg-correct ") ||
            (colour === "has" && "bg-almost") ||
            (colour === "default" && "bg-wrong"))
      }`}
    >
      {letter}
    </div>
  );
};

export default WordleTile;

import { Color } from "./WordleRow";

type Props = {
  letter: string;
  done: boolean;
  colour: Color;
};

const WordleTile = ({ letter, done, colour }: Props) => {
  return (
    <div
      className={`flex h-12 w-12  items-center justify-center rounded-sm border font-mono text-3xl font-bold transition-all duration-300 ${
        done &&
        ((colour === "is" && "bg-correct") ||
          (colour === "has" && "bg-almost") ||
          (colour === "default" && "bg-wrong"))
      }`}
    >
      {letter}
    </div>
  );
};

export default WordleTile;

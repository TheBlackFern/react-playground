import { Color } from "./WordleRow";

type Props = {
  letter: string;
  done: boolean;
  colour: Color;
};

const WordleTile = ({ letter, done, colour }: Props) => {
  return (
    <div
      className={`flex h-12 w-12  items-center justify-center rounded-lg border font-mono text-3xl font-bold transition-all duration-300 ${
        done &&
        ((colour === "is" && "bg-green-400") ||
          (colour === "has" && "bg-blue-600"))
      }`}
    >
      {letter}
    </div>
  );
};

export default WordleTile;

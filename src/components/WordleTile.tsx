import { useContext } from "react";
import { AnswerContext } from "./Wordle";

type Props = {
  letter: string;
  place: number;
  done: boolean;
};

const WordleTile = ({ letter, place, done }: Props) => {
  const answer = useContext(AnswerContext);
  let status: 2 | 1 | 0;
  if (answer[place] === letter) {
    status = 2;
  } else if (answer.includes(letter)) {
    status = 1;
  } else {
    status = 0;
  }

  return (
    <div
      className={`flex h-12 w-12  items-center justify-center rounded-lg border font-mono text-3xl font-bold transition-all duration-300 ${
        done &&
        ((status === 2 && "bg-green-400") || (status === 1 && "bg-blue-600"))
      }`}
    >
      {letter}
    </div>
  );
};

export default WordleTile;

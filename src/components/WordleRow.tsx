import { Colour } from "./Wordle";
import WordleTile from "./WordleTile";

type Props = {
  word: string[];
  done: boolean;
  colours: Colour[];
};

const WordleRow = ({ word, done, colours }: Props) => {
  return (
    <div className="flex gap-1">
      <WordleTile letter={word[0]} colour={colours[0]} done={done} />
      <WordleTile letter={word[1]} colour={colours[1]} done={done} />
      <WordleTile letter={word[2]} colour={colours[2]} done={done} />
      <WordleTile letter={word[3]} colour={colours[3]} done={done} />
      <WordleTile letter={word[4]} colour={colours[4]} done={done} />
    </div>
  );
};

export default WordleRow;

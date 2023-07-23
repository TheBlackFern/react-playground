import WordleTile from "./WordleTile";

type Props = {
  word: string[];
  done: boolean;
};

const WordleRow = ({ word, done }: Props) => {
  return (
    <div className="flex gap-2">
      <WordleTile letter={word[0]} place={0} done={done} />
      <WordleTile letter={word[1]} place={1} done={done} />
      <WordleTile letter={word[2]} place={2} done={done} />
      <WordleTile letter={word[3]} place={3} done={done} />
      <WordleTile letter={word[4]} place={4} done={done} />
    </div>
  );
};

export default WordleRow;

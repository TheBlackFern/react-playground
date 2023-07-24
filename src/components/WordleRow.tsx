import WordleTile from "./WordleTile";

type Props = {
  word: string[];
  done: boolean;
  answer: string[];
};

export type Color = "default" | "is" | "has";

const WordleRow = ({ word, done, answer }: Props) => {
  const colours: Color[] = Array(5).fill("default");
  const notAccurate: string[] = [];
  answer.forEach((char, idx) => {
    if (word[idx] == char) {
      colours[idx] = "is";
    } else {
      notAccurate.push(char);
    }
  });
  word.forEach((char, idx) => {
    if (notAccurate.includes(char) && colours[idx] !== "is") {
      colours[idx] = "has";
      notAccurate.splice(notAccurate.indexOf(char), 1);
    }
  });

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

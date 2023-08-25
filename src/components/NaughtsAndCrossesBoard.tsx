import * as React from "react";
import NaughtsAndCrossesTile from "./NaughtsAndCrossesTile";
import { ResetButton } from "./ui/";

function NaughtsAndCrossesBoard() {
  const [values, setValues] = React.useState(Array(9).fill(null));
  const [isCurrentX, setIsCurrentX] = React.useState(true);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const winningRef = React.useRef(Array(9).fill(false));

  // after each rerender check all lines to see if anybody won
  React.useEffect(() => {
    const linesToCheck = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < linesToCheck.length; i++) {
      const line = linesToCheck[i];
      if (
        values[line[0]] &&
        values[line[0]] === values[line[1]] &&
        values[line[1]] === values[line[2]]
      ) {
        const newDone = [...winningRef.current];
        newDone[line[0]] = true;
        newDone[line[1]] = true;
        newDone[line[2]] = true;
        winningRef.current = newDone;
        setIsGameOver(true);
        break;
      }
    }
  }, [values]);

  function resetBoard() {
    setIsGameOver(false);
    setValues(Array(9).fill(null));
    winningRef.current = Array(9).fill(false);
    setIsCurrentX(true);
  }

  function handleClick(i: number) {
    if (values[i] || isGameOver) {
      return;
    }
    const newValues = [...values];
    newValues[i] = isCurrentX ? "X" : "O";
    setIsCurrentX(!isCurrentX);
    setValues(newValues);
  }

  return (
    <div className="relative flex w-40 flex-row gap-3 pl-2">
      <ResetButton reset={resetBoard} />
      <div className={`relative grid grid-cols-3 transition-all duration-300`}>
        {values.map((val, i) => (
          <NaughtsAndCrossesTile
            value={val}
            onTileClick={() => handleClick(i)}
            isWinning={winningRef.current[i]}
            gameOver={isGameOver}
          />
        ))}
      </div>
    </div>
  );
}

export default NaughtsAndCrossesBoard;

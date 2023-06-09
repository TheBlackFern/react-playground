import { useState, useEffect, useRef } from "react";
import NaughtsAndCrossesTile from "./NaughtsAndCrossesTile";
import { Button } from "./ui/Button";
import { RefreshCw } from "lucide-react";

function NaughtsAndCrossesBoard() {
  const [values, setValues] = useState(Array(9).fill(null));
  const [isCurrentX, setIsCurrentX] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const winningRef = useRef(Array(9).fill(false));

  // after each rerender check all lines to see if someone won
  useEffect(() => {
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
    <div className="z-1 mt relative mr-2 flex flex-row rounded-lg p-3">
      <Button
        className="absolute -right-10 top-1/2 h-10 w-10 -translate-y-1/2"
        onClick={resetBoard}
      >
        <RefreshCw className="absolute h-6 w-6" strokeWidth={1.5} />
      </Button>
      <div className={`relative grid grid-cols-3 transition-all duration-300`}>
        <NaughtsAndCrossesTile
          value={values[0]}
          onTileClick={() => handleClick(0)}
          isWinning={winningRef.current[0]}
          gameOver={isGameOver}
        />
        <NaughtsAndCrossesTile
          value={values[1]}
          onTileClick={() => handleClick(1)}
          isWinning={winningRef.current[1]}
          gameOver={isGameOver}
        />
        <NaughtsAndCrossesTile
          value={values[2]}
          onTileClick={() => handleClick(2)}
          isWinning={winningRef.current[2]}
          gameOver={isGameOver}
        />
        <NaughtsAndCrossesTile
          value={values[3]}
          onTileClick={() => handleClick(3)}
          isWinning={winningRef.current[3]}
          gameOver={isGameOver}
        />
        <NaughtsAndCrossesTile
          value={values[4]}
          onTileClick={() => handleClick(4)}
          isWinning={winningRef.current[4]}
          gameOver={isGameOver}
        />
        <NaughtsAndCrossesTile
          value={values[5]}
          onTileClick={() => handleClick(5)}
          isWinning={winningRef.current[5]}
          gameOver={isGameOver}
        />
        <NaughtsAndCrossesTile
          value={values[6]}
          onTileClick={() => handleClick(6)}
          isWinning={winningRef.current[6]}
          gameOver={isGameOver}
        />
        <NaughtsAndCrossesTile
          value={values[7]}
          onTileClick={() => handleClick(7)}
          isWinning={winningRef.current[7]}
          gameOver={isGameOver}
        />
        <NaughtsAndCrossesTile
          value={values[8]}
          onTileClick={() => handleClick(8)}
          isWinning={winningRef.current[8]}
          gameOver={isGameOver}
        />
      </div>
    </div>
  );
}

export default NaughtsAndCrossesBoard;

import { useState, useEffect, useRef } from "react";
import NaughtsAndCrossesTile from "./NaughtsAndCrossesTile";
import NaughtsAndCrossesRestart from "./NaughtsAndCrossesRestart";


function NaughtsAndCrossesBoard() {
    const [values, setValues] = useState(Array(9).fill(null));
    const [isCurrentX, setIsCurrentX] = useState(true);
    const [isGameOver, setIsGameOver] = useState(false);
    const doneRef = useRef(Array(9).fill(false));
    
    useEffect(() => {
        const linesToCheck = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,7], [2,5,8],
            [0,4,8], [2,4,6],
        ]
        for (let i = 0; i < linesToCheck.length; i++) {
            const line = linesToCheck[i];
            if (values[line[0]] && values[line[0]] === values[line[1]] && values[line[1]] === values[line[2]]) {
                const newDone = [...doneRef.current];
                newDone[line[0]] = true;
                newDone[line[1]] = true;
                newDone[line[2]] = true;
                doneRef.current = newDone;
                setIsGameOver(true);
                break;
            }
        }
      }, [values]);


    function resetBoard() {
        setIsGameOver(false);
        setValues(Array(9).fill(null));
        doneRef.current = Array(9).fill(false);
        setIsCurrentX(true)
    }

    function handleClick(i: number) {
        if (values[i] || isGameOver) {
            return;
        }
        const newValues = [...values];
        newValues[i] = isCurrentX ? "X" : "O"
        setIsCurrentX(!isCurrentX)
        setValues(newValues);
    }

    return (
        <div className="relative mr-2">
            <div className="grid grid-cols-3">
                <NaughtsAndCrossesTile value={values[0]} onTileClick={() => handleClick(0)} done={doneRef.current[0]}/>
                <NaughtsAndCrossesTile value={values[1]} onTileClick={() => handleClick(1)} done={doneRef.current[1]}/>
                <NaughtsAndCrossesTile value={values[2]} onTileClick={() => handleClick(2)} done={doneRef.current[2]}/>
                <NaughtsAndCrossesTile value={values[3]} onTileClick={() => handleClick(3)} done={doneRef.current[3]}/>
                <NaughtsAndCrossesTile value={values[4]} onTileClick={() => handleClick(4)} done={doneRef.current[4]}/>
                <NaughtsAndCrossesTile value={values[5]} onTileClick={() => handleClick(5)} done={doneRef.current[5]}/>
                <NaughtsAndCrossesTile value={values[6]} onTileClick={() => handleClick(6)} done={doneRef.current[6]}/>
                <NaughtsAndCrossesTile value={values[7]} onTileClick={() => handleClick(7)} done={doneRef.current[7]}/>
                <NaughtsAndCrossesTile value={values[8]} onTileClick={() => handleClick(8)} done={doneRef.current[8]}/>
            </div>
            <NaughtsAndCrossesRestart   resetBoard={resetBoard}  />
        </div>
    );
}

export default NaughtsAndCrossesBoard;
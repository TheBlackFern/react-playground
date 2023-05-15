import { useEffect, useRef, useState } from 'react';
import Button from './basic/Button';


function RockPaperScissors() {
    let [userGesture, setUserGesture] = useState("");
    let [enemyGesture, setEnemyGesture] = useState("✊");
    let displayField = useRef("Pick!");

    function handlePickGesture(sign: string) {
        setUserGesture(sign);
    }

    useEffect(() => {
        const topLine = `${userGesture} VS ${enemyGesture}`;
        let bottomLine: string;
        if (userGesture === "✊" && enemyGesture === "✋" ||
        userGesture === "✋" && enemyGesture === "✌️" ||
        userGesture === "✌️" && enemyGesture === "✊") {
            bottomLine = "You lost!";
        } else if (enemyGesture === "✊" && userGesture === "✋" ||
        enemyGesture === "✋" && userGesture === "✌️" ||
        enemyGesture === "✌️" && userGesture === "✊") {
            bottomLine = "You Won!";
        } else {
            bottomLine = "Draw!";
        }
        displayField.current = `${topLine}\n${bottomLine}`;
    }, [userGesture, enemyGesture]);

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex space-x-3'> 
                <Button variant='alternative' additionalClasses='w-8 h-8' onClick={() => handlePickGesture("✊")}>✊</Button>
                <Button variant='alternative' additionalClasses='w-8 h-8' onClick={() => handlePickGesture("✋")}>✋</Button>
                <Button variant='alternative' additionalClasses='w-8 h-8' onClick={() => handlePickGesture("✌️")}>✌️</Button>
            </div>
            <div className='mt-4'>
                { displayField.current }
            </div>
        </div>
    )
  }

export default RockPaperScissors;
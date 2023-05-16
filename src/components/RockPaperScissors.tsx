import { useState } from 'react';
import Button from './basic/Button';


function RockPaperScissors() {
    const [userGesture, setUserGesture] = useState<string>();
    const [enemyGesture, setEnemyGesture] = useState<string>();
    const [result, setResult] = useState("");

    function handlePickGesture(sign: string) {
        const gestures = ["✊", "✋", "✌️"];
        const randomIndex = Math.floor(Math.random() * gestures.length);
        const randomGesture = gestures[randomIndex];
        setEnemyGesture(randomGesture);
        setUserGesture(sign);
        getWinner(sign, randomGesture);
    }

    function getWinner(userSign: string, enemySign: string): void {
        let newResult: string;
        if (userSign === enemySign) {
            newResult = "Draw!";
        } else if (
            (enemySign === "✊" && userSign === "✋") ||
            (enemySign === "✋" && userSign === "✌️") ||
            (enemySign === "✌️" && userSign === "✊")) {
            newResult = "You won!";
        } else {
            newResult = "You lost!";
        }
        setResult(newResult);
    };
      
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex space-x-3'> 
                <Button variant='alternative' additionalClasses='text-xl w-12 h-12' onClick={() => handlePickGesture("✊")}>✊</Button>
                <Button variant='alternative' additionalClasses='text-xl w-12 h-12' onClick={() => handlePickGesture("✋")}>✋</Button>
                <Button variant='alternative' additionalClasses='text-xl w-12 h-12' onClick={() => handlePickGesture("✌️")}>✌️</Button>
            </div>
            <div className='flex flex-col items-center justify-center mt-4 space-y-3'>
                <div className='text-xl'>
                    { userGesture? `${ userGesture } VS ${ enemyGesture }` : "Pick!"} </div>
                <div className='text-2xl'>{ result }</div>
            </div>
        </div>
    )
  }

export default RockPaperScissors;
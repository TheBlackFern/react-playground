import { useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { Button } from "./ui/Button";

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
      (enemySign === "✌️" && userSign === "✊")
    ) {
      newResult = "You won!";
    } else {
      newResult = "You lost!";
    }
    setResult(newResult);
  }

  return (
    <div className="flex flex-col items-center justify-center pt-4">
      <div className="flex space-x-3">
        <Button
          variant="outline"
          className="h-12 w-12 text-xl"
          onClick={() => handlePickGesture("✊")}
        >
          ✊
        </Button>
        <Button
          variant="outline"
          className="h-12 w-12 text-xl"
          onClick={() => handlePickGesture("✋")}
        >
          ✋
        </Button>
        <Button
          variant="outline"
          className="h-12 w-12 text-xl"
          onClick={() => handlePickGesture("✌️")}
        >
          ✌️
        </Button>
      </div>
      <div className="relative mb-10 mt-4 flex flex-col items-center justify-between space-y-3 text-center">
        <TextTransition
          className="text-xl"
          springConfig={presets.slow}
          inline={true}
          translateValue="0%"
          direction="up"
        >
          <div className="flex flex-row">
            <p className="w-8">{userGesture ? `${userGesture}` : ""}</p>
            <p className="w-8">{userGesture ? "VS" : "Pick!"}</p>
            <p className="w-8">{userGesture ? `${enemyGesture}` : ""}</p>
          </div>
          {result}
        </TextTransition>
      </div>
    </div>
  );
}

export default RockPaperScissors;

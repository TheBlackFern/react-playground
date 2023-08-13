import * as React from "react";
import TextTransition, { presets } from "react-text-transition";
import { Button } from "./ui/Button";

function RockPaperScissors() {
  const [userGesture, setUserGesture] = React.useState<string>();
  const [enemyGesture, setEnemyGesture] = React.useState<string>();
  const [result, setResult] = React.useState("");
  const gestures = ["✊", "✋", "✌️"];

  function handlePickGesture(sign: string) {
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
    <div className="flex flex-col items-center justify-center">
      <div className="flex space-x-3">
        {gestures.map((g) => (
          <Button
            className="h-12 w-12 text-xl"
            onClick={() => handlePickGesture(g)}
            key={g}
          >
            {g}
          </Button>
        ))}
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
            <p className="w-8 font-thin">{userGesture ? "VS" : "Pick!"}</p>
            <p className="w-8">{userGesture ? `${enemyGesture}` : ""}</p>
          </div>
          <p className="mt-3 font-thin">{result}</p>
        </TextTransition>
      </div>
    </div>
  );
}

export default RockPaperScissors;

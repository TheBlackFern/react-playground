import * as React from "react";
import { Button } from "./ui";

const GuessColor = () => {
  const [isCorrect, setIsCorrect] = React.useState(false);
  const [guess, setGuess] = React.useState("#ffffff");

  const [hexValues, setHexValues] = React.useState([
    "#ffffff",
    "#ffffff",
    "#ffffff",
  ]);
  const [correctHexValue, setCorrectHexValue] = React.useState("");
  const [prevHexValue, setPrevHexValue] = React.useState("");
  const [isGameOver, setIsGameOver] = React.useState(false);

  const generateRandomHexValues = () => {
    const hexValues = [];
    for (let i = 0; i < 3; i++) {
      const hexValue = Math.random().toString(16).substring(2, 8);
      hexValues.push(`#${hexValue.toUpperCase()}`);
    }
    const shuffledHexValues = hexValues
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setHexValues(shuffledHexValues);
    setCorrectHexValue(hexValues[0]);
  };

  const handleGuess = (hexValue: string) => {
    setIsGameOver(true);
    setGuess(hexValue);
    setPrevHexValue(correctHexValue);
    if (hexValue === correctHexValue) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    generateRandomHexValues();
  };

  React.useEffect(() => {
    generateRandomHexValues();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className="h-48 w-96 rounded-md"
        style={{
          backgroundColor: correctHexValue,
        }}
      />

      <div className="flex items-center justify-center gap-2">
        {hexValues.map((val, idx) => (
          <Button
            variant={"outline"}
            className="w-24 transition duration-300 ease-in-out hover:scale-110"
            onClick={() => handleGuess(val)}
            key={idx}
          >
            {val}
          </Button>
        ))}
      </div>
      {isGameOver && (
        <>
          <p className="text-xl font-thin ">
            Your guessed the{" "}
            <span className="font-bold" style={{ color: guess }}>
              {isCorrect ? "correct" : "wrong"}
            </span>{" "}
            hex value!
          </p>
          <div className="flex gap-2">
            <div className="flex flex-col justify-center">
              <div
                className="relative flex h-20 w-32 items-center justify-center rounded-lg"
                style={{ background: prevHexValue }}
              >
                <span className="absolute right-0 top-0 w-16 rounded-bl-sm bg-background p-1 text-sm">
                  {prevHexValue}
                </span>
              </div>
              <span className="text-center text-base font-light">correct</span>
            </div>
            <div className="flex flex-col justify-center">
              <div
                className="relative flex h-20 w-32 items-center justify-center rounded-lg"
                style={{ background: guess }}
              >
                <span className="absolute right-0 top-0 w-16 rounded-bl-sm bg-background p-1 text-sm">
                  {guess}
                </span>
              </div>
              <span className="text-center text-base font-light">
                your guess
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GuessColor;

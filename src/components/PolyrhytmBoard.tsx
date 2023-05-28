import { useRef, useState } from "react";
import PolyrhytmCircle from "./PolyrhytmCircle";
import Button from "./ui/Button";

const PolyrhytmBoard = () => {
  const totalNumber = 21;
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const timer = useRef<number>();
  const renderTime = 15;

  // all circles get their elapsed time from one source of truth,
  // which allows for beautiful synchronisation
  function handleClick() {
    setIsPlaying((prev) => !prev);
    if (isPlaying) {
      clearInterval(timer.current);
    } else {
      timer.current = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + renderTime);
      }, renderTime);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="z-10">
        <Button onClick={handleClick} className="w-12 py-1">
          {isPlaying ? "Pause" : "Start"}
        </Button>
      </div>
      <div className="relative h-[22rem]">
        <div className="absolute top-[52%]">
          {[...Array(totalNumber)].map((_, i) => (
            <PolyrhytmCircle
              elapsedTime={elapsedTime}
              currentNumber={i}
              isPlaying={isPlaying}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PolyrhytmBoard;

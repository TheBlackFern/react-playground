import { useRef, useState } from "react";
import PolyrhytmCircle from "./PolyrhytmCircle";
import { Button } from "./ui/Button";
import { Slider } from "./ui/Slider";

const PolyrhytmBoard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [lapTime, setLapTime] = useState(200);
  const timer = useRef<number>();

  const renderTime = 15;
  const totalNumber = 21;

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

  const handleChangeSpeed = (val: number[]) => {
    setLapTime(val[0]);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="z-10 flex flex-row items-center justify-center space-x-3">
        <Button onClick={handleClick} className="w-12 py-1">
          {isPlaying ? "Pause" : "Start"}
        </Button>
        <div className="flex flex-row items-center justify-center space-x-1">
          <Slider
            defaultValue={[200]}
            onValueChange={handleChangeSpeed}
            min={100}
            max={900}
            step={50}
            className="h-2 w-24 cursor-pointer appearance-none rounded-lg bg-primary dark:bg-primary"
          ></Slider>
          <p>{`${lapTime} sec`}</p>
        </div>
      </div>
      <div className="relative h-[22rem]">
        <div className="absolute top-[52%]">
          {[...Array(totalNumber)].map((_, i) => (
            <PolyrhytmCircle
              elapsedTime={elapsedTime}
              currentNumber={i}
              isPlaying={isPlaying}
              lapTime={lapTime}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PolyrhytmBoard;

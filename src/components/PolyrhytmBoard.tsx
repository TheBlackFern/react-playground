import { useRef, useState } from "react";
import PolyrhytmCircle from "./PolyrhytmCircle";
import { Button } from "./ui/Button";
import { Slider } from "./ui/Slider";

const PolyrhytmBoard = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // at the end of the day, we don't use it for time measurement,
  // we use it to synchronise all circles: this way we have just one
  // source of truth, when elapsed time changes, they all update
  // simulataneously as opposed to one by one, causing desync
  const [elapsedTime, setElapsedTime] = useState(0);
  const [syncTime, setSyncTime] = useState(200);
  const timer = useRef<number>();

  const renderTime = 15; // ~ 60 fps
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
    setSyncTime(val[0]);
  };

  return (
    <div className="mt-4 flex flex-col items-center">
      <div className="z-10 flex flex-col items-center justify-center space-y-3">
        <div className="w-42 relative flex flex-row items-center justify-center space-x-1">
          <p className="pb-1">Full sync time</p>
          <Slider
            defaultValue={[200]}
            onValueChange={handleChangeSpeed}
            min={100}
            max={900}
            step={50}
            className="h-2 w-24 cursor-pointer appearance-none rounded-lg bg-destructive text-destructive dark:bg-destructive"
          ></Slider>
          <p>{`${syncTime} sec`}</p>
        </div>
        <Button onClick={handleClick} className="h-6 w-12 py-3">
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
              syncTime={syncTime}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PolyrhytmBoard;

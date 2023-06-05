import { useRef, useState } from "react";
import PolyrhytmCircle from "./PolyrhytmCircle";
import PolyrhytmSettings from "./PolyrhytmSettings";

const PolyrhytmBoard = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // at the end of the day, we don't use it for time measurement,
  // we use it to synchronise all circles: this way we have just one
  // source of truth, when elapsed time changes, they all update
  // simulataneously as opposed to one by one, causing desync
  const [elapsedTime, setElapsedTime] = useState(0);
  const [syncTime, setSyncTime] = useState(600);
  const [volume, setVolume] = useState(0.5);
  const timer = useRef<number>();

  const renderTime = 15; // ~ 60 fps
  const totalNumber = 21;

  // all circles get their elapsed time from one source of truth,
  // which allows for beautiful synchronisation
  function handleTogglePlay() {
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

  const handleChangeVolume = (val: number[]) => {
    setVolume(val[0]);
  };

  return (
    <div className="mb-2 mt-4 flex flex-col items-center">
      <PolyrhytmSettings
        handleTogglePlay={handleTogglePlay}
        handleChangeSpeed={handleChangeSpeed}
        handleChangeVolume={handleChangeVolume}
        isPlaying={isPlaying}
        syncTime={syncTime}
      />
      <div className="relative h-[22rem]">
        <div className="absolute top-[52%]">
          {[...Array(totalNumber)].map((_, i) => (
            <PolyrhytmCircle
              elapsedTime={elapsedTime}
              currentNumber={i}
              isPlaying={isPlaying}
              syncTime={syncTime}
              volume={volume}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PolyrhytmBoard;

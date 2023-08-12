import * as React from "react";
import PolyrhytmCircle from "./PolyrhytmCircle";
import PolyrhytmSettings from "./PolyrhytmSettings";

const PolyrhytmBoard = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  // at the end of the day, we don't use it for time measurement,
  // we use it to synchronise all circles: this way we have just one
  // source of truth, when elapsed time changes, they all update
  // simulataneously as opposed to one by one, causing desync
  const [elapsedTime, setElapsedTime] = React.useState(0);
  const [syncTime, setSyncTime] = React.useState(600);
  const [volume, setVolume] = React.useState(0.5);
  const timer = React.useRef<number>();

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
    <div className="flex flex-col items-center gap-4">
      <PolyrhytmSettings
        handleTogglePlay={handleTogglePlay}
        handleChangeSpeed={handleChangeSpeed}
        handleChangeVolume={handleChangeVolume}
        isPlaying={isPlaying}
        syncTime={syncTime}
      />
      {/* max radius = totalNumber * baseRadius = 168px */}
      <div className="relative h-[336px] w-[336px]">
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
  );
};

export default PolyrhytmBoard;

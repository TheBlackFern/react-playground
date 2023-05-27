import { useRef, useState } from "react";
import PolyrhytmCircle from "./PolyrhytmCircle";
import Button from "./basic/Button";

const PolyrhytmBoard = () => {
  const totalNumber = 21;
  const [canPlay, setCanPlay] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const timer = useRef<number>();
  const renderTime = 15;

  function handleClick() {
    setCanPlay((prevCanPlay) => !prevCanPlay);
    if (canPlay) {
      clearInterval(timer.current);
    } else {
      timer.current = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + renderTime);
      }, renderTime);
    }
  }

  return (
    <>
      {[...Array(totalNumber)].map((_, i) => (
        <PolyrhytmCircle
          elapsedTime={elapsedTime}
          currentNumber={i}
          canPlay={canPlay}
          key={i}
        />
      ))}
      <div className="inset-0 flex">
        <Button onClick={handleClick}>Press me</Button>
      </div>
    </>
  );
};

export default PolyrhytmBoard;

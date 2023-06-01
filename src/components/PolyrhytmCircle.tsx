import { useState, useEffect } from "react";
import useSound from "use-sound";
import sound0 from "../assets/sounds/(0).wav";
import sound1 from "../assets/sounds/(1).wav";
import sound2 from "../assets/sounds/(2).wav";
import sound3 from "../assets/sounds/(3).wav";
import sound4 from "../assets/sounds/(4).wav";
import sound5 from "../assets/sounds/(5).wav";
import sound6 from "../assets/sounds/(6).wav";
import sound7 from "../assets/sounds/(7).wav";
import sound8 from "../assets/sounds/(8).wav";
import sound9 from "../assets/sounds/(9).wav";
import sound10 from "../assets/sounds/(10).wav";
import sound11 from "../assets/sounds/(11).wav";
import sound12 from "../assets/sounds/(12).wav";
import sound13 from "../assets/sounds/(13).wav";
import sound14 from "../assets/sounds/(14).wav";
import sound15 from "../assets/sounds/(15).wav";
import sound16 from "../assets/sounds/(16).wav";
import sound17 from "../assets/sounds/(17).wav";
import sound18 from "../assets/sounds/(18).wav";
import sound19 from "../assets/sounds/(19).wav";
import sound20 from "../assets/sounds/(20).wav";

const soundMap = new Map<number, string>();
soundMap.set(0, sound0);
soundMap.set(1, sound1);
soundMap.set(2, sound2);
soundMap.set(3, sound3);
soundMap.set(4, sound4);
soundMap.set(5, sound5);
soundMap.set(6, sound6);
soundMap.set(7, sound7);
soundMap.set(8, sound8);
soundMap.set(9, sound9);
soundMap.set(10, sound10);
soundMap.set(11, sound11);
soundMap.set(12, sound12);
soundMap.set(13, sound13);
soundMap.set(14, sound14);
soundMap.set(15, sound15);
soundMap.set(16, sound16);
soundMap.set(17, sound17);
soundMap.set(18, sound18);
soundMap.set(19, sound19);
soundMap.set(20, sound20);

interface PolyrhytmCircleProps {
  elapsedTime: number;
  lapTime: number;
  currentNumber: number;
  isPlaying: boolean;
}

const PolyrhytmCircle: React.FC<PolyrhytmCircleProps> = ({
  elapsedTime,
  lapTime,
  currentNumber,
  isPlaying,
}) => {
  const numberOfLaps = 50;
  const baseVelocity = 360 / lapTime;
  const angularVelocity = (numberOfLaps - currentNumber) * baseVelocity;
  const baseOrbitRadius = 8;
  const circleRadius = 2;
  const orbitRadius = (currentNumber + 1) * baseOrbitRadius;
  const [play] = useSound(soundMap.get(currentNumber));
  const angle = (elapsedTime * angularVelocity) / 1000;
  const revolutionPeriod = (360 * 1000) / angularVelocity;

  const [nextRevolution, setNextRevolution] = useState(revolutionPeriod);
  const [lightUp, setLightUp] = useState(false);

  // this is the most reliable solution as when time is stopped, we don't get lights and
  // sounds firing but at the same time we are spot on with the timing
  useEffect(() => {
    if (elapsedTime >= nextRevolution) {
      play();
      setLightUp(true);
      setTimeout(() => {
        setLightUp(false);
      }, 400);
      setNextRevolution((prev) => (prev += revolutionPeriod));
    }
  }, [elapsedTime]);

  // Tailwind renders class components once upon bulding, so these wouldn't work dinamically
  // like w-[`${{orbitRadius * 2 - circleRadius * 2}`px], which is a shame.
  // There may be a workarourd which as of now I'm not aware of, will consider
  // rewriting later.
  const containerStyle: React.CSSProperties = {
    height: `${orbitRadius * 2 - circleRadius * 2}px`,
    width: `${orbitRadius * 2 - circleRadius * 2}px`,
  };

  const circleStyle: React.CSSProperties = {
    top: `calc(50% - ${circleRadius}px)`,
    left: `calc(50% - ${circleRadius}px)`,
    width: `${circleRadius * 2}px`,
    height: `${circleRadius * 2}px`,
    transform: `rotate(${angle}deg) translateX(${
      orbitRadius - circleRadius
    }px)`,
    transformOrigin: "50% 50%",
  };

  return (
    <div
      style={containerStyle}
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border ${
        isPlaying && lightUp
          ? "border-primary dark:border-primary"
          : "border-input dark:border-input"
      } transition-all duration-500`}
    >
      <div
        style={circleStyle}
        className="absolute rounded-full bg-primary"
      ></div>
    </div>
  );
};

export default PolyrhytmCircle;

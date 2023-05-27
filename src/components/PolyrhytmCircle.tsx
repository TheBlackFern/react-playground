import { useState, useEffect } from "react";
import useSound from "use-sound";
import sound0 from "../sounds/(0).wav";
import sound1 from "../sounds/(1).wav";
import sound2 from "../sounds/(2).wav";
import sound3 from "../sounds/(3).wav";
import sound4 from "../sounds/(4).wav";
import sound5 from "../sounds/(5).wav";
import sound6 from "../sounds/(6).wav";
import sound7 from "../sounds/(7).wav";
import sound8 from "../sounds/(8).wav";
import sound9 from "../sounds/(9).wav";
import sound10 from "../sounds/(10).wav";
import sound11 from "../sounds/(11).wav";
import sound12 from "../sounds/(12).wav";
import sound13 from "../sounds/(13).wav";
import sound14 from "../sounds/(14).wav";
import sound15 from "../sounds/(15).wav";
import sound16 from "../sounds/(16).wav";
import sound17 from "../sounds/(17).wav";
import sound18 from "../sounds/(18).wav";
import sound19 from "../sounds/(19).wav";
import sound20 from "../sounds/(20).wav";

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
  currentNumber: number;
  canPlay: boolean;
}

const PolyrhytmCircle: React.FC<PolyrhytmCircleProps> = ({
  elapsedTime,
  currentNumber,
  canPlay,
}) => {
  // full circle time in seconds
  const totalTime = 120;
  // max number of full rotations until all realign
  const numberOfCircles = 50;
  // 360 degrees in
  const baseVelocity = 360 / totalTime;
  const angularVelocity = (numberOfCircles - currentNumber) * baseVelocity;
  const baseOrbitRadius = 10;
  const circleRadius = 2;
  const orbitRadius = (currentNumber + 1) * baseOrbitRadius;
  const [play] = useSound(soundMap.get(currentNumber));
  // const [angle, setAngle] = useState(0);
  const angle = (elapsedTime * angularVelocity) / 1000;
  const revolutionPeriod = (360 * 1000) / angularVelocity;

  const [nextRevolution, setNextRevolution] = useState(revolutionPeriod);
  const [lightUp, setLightUp] = useState(false);

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

  // As we can change the velocity, we can't guarantee that the angle always gets to 360
  // for example, if the velocity is 7, the angle would go from 357 to 364, and the problem is even
  // worse for non-integers. We can kinda solve it with Math.round, but this seems to me a more
  // elegant solution - just make them independent.
  //
  // FIX?: minimising or switching tabs breaks the cycle *sigh* not that elegant, I guess
  //
  // function renderGoingFullCircle() {
  //   console.log(canWePlay);
  //   if (canWePlay) {
  //     play();
  //   }
  //   setLightUp(true);
  //   setTimeout(() => {
  //     setLightUp(false);
  //   }, 400)
  //   setTimeout(() => {
  //     renderGoingFullCircle();
  //   }, 360 * renderTime / velocity)
  // }

  // function animateFullCircle() {
  //   play();
  //   setLightUp(true);
  //   setTimeout(() => {
  //     setLightUp(false);
  //   }, 400);
  // }

  // useEffect(() => {
  //   if (canPlay) {
  //     const interval = setInterval(() => {
  //       const newAngle = angle + velocity;
  //       setAngle(newAngle);
  //     }, renderTime);
  //     // if (!initEffect) {
  //     //   renderGoingFullCircle();
  //     //   setInitEffect(true);
  //     // }
  //     return () => clearInterval(interval);
  //   }
  // }, [angle, canPlay, velocity]);

  // useEffect(() => {
  //   if (canPlay) {
  //     const startTime = performance.now();
  //     let animationFrameId: number;

  //     const animate = (currentTime: number) => {
  //       const elapsedTime = currentTime - startTime;
  //       const updatedAngle = (elapsedTime * velocity) / renderTime;

  //       setAngle(updatedAngle % 360);

  //       if (canPlay) {
  //         play();
  //       }

  //       if (elapsedTime < 360 * renderTime * 10) {
  //         animationFrameId = requestAnimationFrame(animate);
  //       }
  //     };

  //     if (!initEffect) {
  //       setInitEffect(true);
  //       animate(performance.now());
  //     }

  //     return () => cancelAnimationFrame(animationFrameId);
  //   }
  // }, [canPlay, velocity, initEffect]);

  // Tailwind renders class components once upon bulding, so these wouldn't work dinamically
  // like w-[`${{orbitRadius * 2 - circleRadius * 2}`px], which is a shame.
  // A workaround would be to just pre-render all needed class. It's sort of doable for
  // the orbit part, but is just not practical for the circle movement.
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
      className={`fixed rounded-full border ${
        canPlay && lightUp ? "border-rose-400" : "border-rose-600"
      } left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
    >
      <div
        style={circleStyle}
        className="absolute rounded-full bg-blue-600 "
      ></div>
    </div>
  );
};

export default PolyrhytmCircle;

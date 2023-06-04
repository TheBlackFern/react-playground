import useSound from "use-sound";
import { useCircleAnimation, useRotation } from "../lib/utils";

interface PolyrhytmCircleProps {
  elapsedTime: number;
  syncTime: number;
  currentNumber: number;
  isPlaying: boolean;
}

const PolyrhytmCircle: React.FC<PolyrhytmCircleProps> = ({
  elapsedTime,
  syncTime,
  currentNumber,
  isPlaying,
}) => {
  const numberOfLaps = 50; // just a nice number

  // baseVelocity is when you complete 1 circle in syncTime
  const baseAngularVelocity = 360 / syncTime;

  // and this is the real angular velocity for this particular circle
  const angularVelocity = (numberOfLaps - currentNumber) * baseAngularVelocity;
  const baseOrbitRadius = 8;
  const circleRadius = 2;
  const orbitRadius = (currentNumber + 1) * baseOrbitRadius;
  const [play] = useSound(
    `/react-playground/src/assets/sounds/vibro (${currentNumber}).wav`
  );
  const [angle] = useRotation(elapsedTime, angularVelocity);
  const [lightUp] = useCircleAnimation(angle, play);

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

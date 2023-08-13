import useSound from "use-sound";
import vibroMap from "../assets/assets";
import { useRotation } from "../hooks/useRotation";
import { useCircleAnimation } from "../hooks/useCircleAnimation";

type Props = {
  elapsedTime: number;
  syncTime: number;
  currentNumber: number;
  isPlaying: boolean;
  volume: number;
};

const PolyrhytmCircle = ({
  elapsedTime,
  syncTime,
  currentNumber,
  isPlaying,
  volume,
}: Props) => {
  const numberOfLaps = 50; // just a nice number

  // baseVelocity is when you complete 1 circle in syncTime
  const baseAngularVelocity = 360 / syncTime;

  // and this is the real angular velocity for this particular circle
  const angularVelocity = (numberOfLaps - currentNumber) * baseAngularVelocity;
  const baseOrbitRadius = 8;
  const circleRadius = 2;
  const orbitRadius = (currentNumber + 1) * baseOrbitRadius;
  const [play] = useSound(
    // `/react-playground/src/assets/sounds/vibro (${currentNumber}).wav`
    vibroMap.get(currentNumber) ?? "",
    {
      volume: volume,
    }
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
      className={`absolute inset-0 m-auto rounded-full border transition-all duration-500 ${
        isPlaying && lightUp
          ? "border-primary dark:border-primary"
          : "border-input dark:border-input"
      }`}
    >
      <div
        style={circleStyle}
        className="absolute rounded-full bg-primary"
      ></div>
    </div>
  );
};

export default PolyrhytmCircle;

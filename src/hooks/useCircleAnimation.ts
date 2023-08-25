import * as React from "react";
import { PlayFunction } from "use-sound/dist/types";

/**
 * Returns a boolean value for animation triggering.
 *
 * @param angle - an angle value
 * @param play - function for playing the sound.
 */
export function useCircleAnimation(
  angle: number,
  play: PlayFunction
): [lightUp: boolean] {
  // this is the angle of the next full revolution, so 180, 360, 540, 720, 1080...
  const [nextFullRevTime, setNextFullRevTime] = React.useState(180);
  const [lightUp, setLightUp] = React.useState(false);

  // This is the most reliable solution as when time is stopped we don't get lights and
  // sounds firing, but at the same time we are spot on with the timing. Also changing syncTime
  // doesn't affect anything (as apposed to having it be dependant on elapsed time and nextFullRevTime)
  React.useEffect(() => {
    if (angle >= nextFullRevTime) {
      play();
      setLightUp(true);
      setTimeout(() => {
        setLightUp(false);
      }, 400);
      setNextFullRevTime((prev) => prev + 180);
    }
  }, [angle, nextFullRevTime, play]);

  return [lightUp];
}

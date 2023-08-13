import * as React from "react";

/**
 * Returns an angle that gets updated over time.
 *
 * @param elapsedTime - time count reference
 * @param angularVelocity - velocity of the circular motion
 * @returns the angle value
 */
export function useRotation(
  elapsedTime: number,
  angularVelocity: number
): [angle: number] {
  const renderTime = 15;
  const [angle, setAngle] = React.useState(0);

  React.useEffect(() => {
    setAngle((prev) => prev + (renderTime * angularVelocity) / 1000);
  }, [elapsedTime]);

  return [angle];
}

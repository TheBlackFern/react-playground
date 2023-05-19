import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import dingSFX from '../sounds/A5_01.wav'

interface PolyrhytmCircleProps {
  orbitRadius: number,
  velocity: number,
  circleRadius: number,
}

const PolyrhytmCircle: React.FC<PolyrhytmCircleProps> = ({ orbitRadius, velocity, circleRadius }) => {
  const [play] = useSound(dingSFX);
  const [angle, setAngle] = useState(0);
  const [lightUp, setLightUp] = useState(false);
  const renderTime = 15;

  // As we can change the velocity, we can't guarantee that the angle always gets to 360 
  // for example, if the velocity is 7, the angle would go from 357 to 364, and the problem is even
  // worse for non-integers. We can kinda solve it with Math.round, but this seems to me a more
  // elegant solution - just make them independent.
  // 
  // FIX?: minimising or switching tabs breaks the cycle *sigh* not that elegant, I guess
  //
  function renderFullCircle() {
    play();
    setLightUp(true);
    setTimeout(() => {
      setLightUp(false);
    }, 400)
    setTimeout(() => {
      renderFullCircle();
    }, 360 * renderTime / velocity)
  }

  useEffect(() => {
    renderFullCircle();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => prevAngle + velocity);
    }, renderTime);
    return () => clearInterval(interval);
  }, [velocity]);

  
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
    transform: `rotate(${angle}deg) translateX(${orbitRadius - circleRadius}px)`,
    transformOrigin: '50% 50%',
  };

  return (
    <div style={containerStyle} className={`fixed rounded-full border ${lightUp ? 'border-rose-400' : 'border-rose-600' } top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
      <div style={circleStyle} className='absolute rounded-full bg-blue-600 '></div>
    </div>
  )
};

export default PolyrhytmCircle;
import { useState, useEffect } from 'react';

interface PolyrhytmCircleProps {
  orbitRadius: number;
  velocity: number;
  circleRadius: number;
}

const PolyrhytmCircle: React.FC<PolyrhytmCircleProps> = ({ orbitRadius, velocity, circleRadius }) => {
  const [angle, setAngle] = useState(0);
  const [lightUp, setLightUp] = useState(false);
  const renderTime = 15;

  function renderFullCircle() {
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
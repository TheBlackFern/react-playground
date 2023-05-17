import React, { useState, useEffect } from 'react';

interface PolyrhytmCircleProps {
  orbitRadius: number;
  velocity: number;
  circleRadius: number;
}

const PolyrhytmCircle: React.FC<PolyrhytmCircleProps> = ({ orbitRadius, velocity, circleRadius }) => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(prevAngle => prevAngle + velocity);
    }, 16);

    return () => clearInterval(interval);
  }, [velocity]);

  const containerStyle: React.CSSProperties = {
    width: `${orbitRadius * 2 - circleRadius * 2}px`,
    height: `${orbitRadius * 2 - circleRadius * 2}px`,
    borderRadius: '50%',
    border: `1px solid rgba(0, 0, 0, 0.5)`,
  };

  const circleStyle: React.CSSProperties = {
    position: 'absolute',
    top: `calc(50% - ${circleRadius}px)`,
    left: `calc(50% - ${circleRadius}px)`,
    width: `${circleRadius * 2}px`,
    height: `${circleRadius * 2}px`,
    borderRadius: '50%',
    backgroundColor: 'blue',
    transform: `rotate(${angle}deg) translateX(${orbitRadius - circleRadius}px)`,
    transformOrigin: '50% 50%',
  };

  return (
    <div style={containerStyle} className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div style={circleStyle}></div>
    </div>
  )
};

export default PolyrhytmCircle;
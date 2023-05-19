// import { useState } from 'react';
import PolyrhytmCircle from './PolyrhytmCircle';
// import Button from './basic/Button';

interface PolyrhytmBoard {
  velocity: number,
}

const PolyrhytmBoard: React.FC<PolyrhytmBoard> = ({ velocity }) => {
    const circleRadius = 2;
    const baseOrbitRadius = 10;
    const circleNumber = 1;
    // const [canPlay, setCanPlay] = useState(false);

    // function handleClick() {
    //   setCanPlay(true)
    // }
    return (
        <>  
            {[...Array(circleNumber)].map((_, i) =>
                <PolyrhytmCircle orbitRadius={(i + 1) * baseOrbitRadius} circleRadius={circleRadius} velocity={(circleNumber - i) * velocity} key={i}/>
            )}
        </>
  )
};

export default PolyrhytmBoard;
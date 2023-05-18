import PolyrhytmCircle from './PolyrhytmCircle';

interface PolyrhytmBoard {
  velocity: number;
}

const PolyrhytmBoard: React.FC<PolyrhytmBoard> = ({ velocity }) => {
    const circleRadius = 2;
    const baseOrbitRadius = 10;
    const circleNumber = 12;
    return (
        <>  
            {[...Array(circleNumber)].map((_, i) =>
                <PolyrhytmCircle orbitRadius={(i + 1) * baseOrbitRadius} circleRadius={circleRadius} velocity={(circleNumber - i) * velocity} key={i}/>
            )}
        </>
  )
};

export default PolyrhytmBoard;
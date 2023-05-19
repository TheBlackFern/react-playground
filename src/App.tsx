import './App.css';
import CounterButtons from './components/CounterButton';
// import NaughtsAndCrossesBoard from './components/NaughtsAndCrossesBoard';
// import RockPaperScissors from './components/RockPaperScissors';
import PolyrhytmBoard from './components/PolyrhytmBoard';
import useSound from 'use-sound';
import dingSFX from './sounds/A5_01.wav'
import Button from './components/basic/Button';

function App() {
  const [play] = useSound(dingSFX);
  const handleClick = () => play();

  return (
    <>
      <PolyrhytmBoard velocity={1}/>
      <div className="flex flex-col items-center h-screen p-10 space-y-10 bg-slate-900 text-slate-400 antialised">
        <h1 className='text-4xl'>Playground!</h1>
        <CounterButtons />
        <Button onClick={handleClick}>Ding!</Button>
        {/* <NaughtsAndCrossesBoard />
        <RockPaperScissors /> */}
      </div>
    </>
  );
}

export default App;

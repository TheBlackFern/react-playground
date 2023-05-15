import './App.css';
import CounterButtons from './components/CounterButton';
import NaughtsAndCrossesBoard from './components/NaughtsAndCrossesBoard';
import RockPaperScissors from './components/RockPaperScissors';

function App() {
  return (
    <div className="flex flex-col items-center h-screen p-10 space-y-10 bg-slate-900 text-slate-400 antialised">
        <h1 className='text-4xl'>Playground!</h1>
        <CounterButtons />
        <NaughtsAndCrossesBoard />
        <RockPaperScissors />
    </div>
  );
}

export default App;

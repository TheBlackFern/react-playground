import NaughtsAndCrossesBoard from "./components/NaughtsAndCrossesBoard";
import RockPaperScissors from "./components/RockPaperScissors";
import PolyrhytmBoard from "./components/PolyrhytmBoard";

function App() {
  return (
    <div className="antialised flex h-full flex-col items-center space-y-10 bg-slate-900 p-10 text-slate-400">
      <h1 className="text-4xl">Playground!</h1>
      <PolyrhytmBoard />
      <NaughtsAndCrossesBoard />
      <RockPaperScissors />
    </div>
  );
}

export default App;

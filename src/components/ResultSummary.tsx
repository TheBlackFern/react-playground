import { createContext } from "react";
import ResultSummaryResult from "./ResultSummaryResult";
import ResultSummarySummary from "./ResultSummarySummary";

type Score = {
  reaction: number;
  memory: number;
  verbal: number;
  visual: number;
};

export const ResultContext = createContext<Score>({
  reaction: 80,
  memory: 92,
  verbal: 61,
  visual: 72,
});

const ResultSummary = () => {
  // create a random result
  const randomReaction = Math.floor(Math.random() * 100);
  const randomMemory = Math.floor(Math.random() * 100);
  const randomVerbal = Math.floor(Math.random() * 100);
  const randomVisual = Math.floor(Math.random() * 100);
  const val = {
    reaction: randomReaction,
    memory: randomMemory,
    verbal: randomVerbal,
    visual: randomVisual,
  };

  return (
    <ResultContext.Provider value={val}>
      <div className="mx-5 mt-17 flex w-auto scale-125 flex-col justify-center sm:mt-10 sm:flex-row sm:pl-5">
        <ResultSummaryResult />
        <ResultSummarySummary />
      </div>
    </ResultContext.Provider>
  );
};

export default ResultSummary;

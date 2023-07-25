import { createContext, useCallback, useMemo, useState } from "react";
import ResultSummaryResult from "./ResultSummaryResult";
import ResultSummarySummary from "./ResultSummarySummary";

type Score = {
  reaction: number;
  memory: number;
  verbal: number;
  visual: number;
};

export const ResultContext = createContext({
  score: {
    reaction: 80,
    memory: 92,
    verbal: 61,
    visual: 72,
  },
  changeScore: (newScore: Score) => {
    -1 && console.log(newScore); // so that it shuts up about newScore not being used
    return;
  },
});

const ResultSummary = () => {
  const [score, setScore] = useState({
    reaction: 80,
    memory: 92,
    verbal: 61,
    visual: 72,
  });

  // function change doesn't cause a rerender
  const changeScore = useCallback((newResult: Score) => {
    setScore(newResult);
  }, []);

  // we keep the result value stored to avoid rerenders
  const contextValue = useMemo(
    () => ({
      score: score,
      changeScore,
    }),
    [score, changeScore]
  );

  return (
    <ResultContext.Provider value={contextValue}>
      <div className="my-17 flex scale-125 flex-col md:mt-10 md:flex-row">
        <ResultSummaryResult />
        <ResultSummarySummary />
      </div>
    </ResultContext.Provider>
  );
};

export default ResultSummary;

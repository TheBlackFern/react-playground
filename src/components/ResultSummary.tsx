import * as React from "react";
import ResultSummaryResult from "./ResultSummaryResult";
import ResultSummarySummary from "./ResultSummarySummary";

export type TResultCategory = "reaction" | "memory" | "verbal" | "visual";

type Score = Record<TResultCategory, number>;

export const ResultContext = React.createContext<Score>({
  reaction: 80,
  memory: 92,
  verbal: 61,
  visual: 72,
});

const ResultSummary = () => {
  // create a random result
  const randResult = {
    reaction: Math.floor(Math.random() * 100),
    memory: Math.floor(Math.random() * 100),
    verbal: Math.floor(Math.random() * 100),
    visual: Math.floor(Math.random() * 100),
  };

  return (
    <ResultContext.Provider value={randResult}>
      <div className="mx-5 mb-10 mt-17 flex w-auto scale-125 flex-col justify-center sm:mt-10 sm:flex-row sm:pl-5">
        <ResultSummaryResult />
        <ResultSummarySummary />
      </div>
    </ResultContext.Provider>
  );
};

export default ResultSummary;

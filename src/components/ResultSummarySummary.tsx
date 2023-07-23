import { useContext, useEffect } from "react";
import { ResultContext } from "./ResultSummary";
import ResultSummarySummaryRow from "./ResultSummarySummaryRow";

const ResultSummarySummary = () => {
  const result = useContext(ResultContext);

  // create a random result
  const randomReaction = Math.floor(Math.random() * 100);
  const randomMemory = Math.floor(Math.random() * 100);
  const randomVerbal = Math.floor(Math.random() * 100);
  const randomVisual = Math.floor(Math.random() * 100);

  // update the score ONCE
  useEffect(() => {
    result.changeScore({
      reaction: randomReaction,
      memory: randomMemory,
      verbal: randomVerbal,
      visual: randomVisual,
    });
  }, []);

  return (
    <div className="z-1 flex h-auto w-52 -translate-y-5 flex-col items-center justify-center rounded-xl p-4 pt-9 shadow-md dark:border md:-translate-x-5 md:translate-y-0 md:py-3 md:pl-9 md:pr-4 md:pt-5">
      <p className="mb-2 self-start text-[10px] font-bold text-[#303b5a] dark:text-[#dee2ed] md:text-sm">
        Summary
      </p>
      <ResultSummarySummaryRow title="reaction" score={randomReaction} />
      <ResultSummarySummaryRow title="memory" score={randomMemory} />
      <ResultSummarySummaryRow title="verbal" score={randomVerbal} />
      <ResultSummarySummaryRow title="visual" score={randomVisual} />
      <button className="mb-3 mt-2 w-full rounded-3xl bg-[#303b5a] py-2.5 text-[10px] font-bold text-white/[0.8] dark:bg-[#c3cbdf] dark:text-black">
        Continue
      </button>
    </div>
  );
};

export default ResultSummarySummary;

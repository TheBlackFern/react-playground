import * as React from "react";
import { ResultContext } from "./ResultSummary";
import ResultSummarySummaryRow from "./ResultSummarySummaryRow";

const ResultSummarySummary = () => {
  const result = React.useContext(ResultContext);

  return (
    <div className="z-1 flex h-auto w-52 -translate-y-5 flex-col items-center justify-center rounded-xl p-4 pt-9 shadow-sm dark:border sm:-translate-x-5 sm:translate-y-0 sm:py-3 sm:pl-9 sm:pr-4 sm:pt-5">
      <p className="mb-2 self-start text-[10px] font-bold text-[#303b5a] dark:text-[#dee2ed] sm:text-sm">
        Summary
      </p>
      <ResultSummarySummaryRow title="reaction" score={result.reaction} />
      <ResultSummarySummaryRow title="memory" score={result.memory} />
      <ResultSummarySummaryRow title="verbal" score={result.verbal} />
      <ResultSummarySummaryRow title="visual" score={result.visual} />
      <button className="mb-3 mt-2 w-full rounded-3xl bg-[#303b5a] py-2.5 text-[10px] font-bold text-white/[0.8] dark:bg-[#c3cbdf] dark:text-black">
        Continue
      </button>
    </div>
  );
};

export default ResultSummarySummary;

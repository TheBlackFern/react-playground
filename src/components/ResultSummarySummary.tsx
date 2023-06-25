import ResultSummarySummaryRow from "./ResultSummarySummaryRow";

const ResultSummarySummary = () => {
  return (
    <div className="z-1 flex h-auto w-52 -translate-y-5 flex-col items-center justify-center rounded-xl p-4 pt-9 shadow-md dark:border md:-translate-x-5 md:translate-y-0 md:py-3 md:pl-9 md:pr-4 md:pt-5">
      <p className="mb-2 self-start text-[10px] font-bold text-[#303b5a] dark:text-[#dee2ed] md:text-sm">
        Summary
      </p>
      <ResultSummarySummaryRow title="reaction" score={80} />
      <ResultSummarySummaryRow title="memory" score={92} />
      <ResultSummarySummaryRow title="verbal" score={61} />
      <ResultSummarySummaryRow title="visual" score={72} />
      <button className="mb-3 mt-2 w-full rounded-3xl bg-[#303b5a] py-2.5 text-[10px] font-bold text-white/[0.8] dark:bg-[#c3cbdf] dark:text-black">
        Continue
      </button>
    </div>
  );
};

export default ResultSummarySummary;

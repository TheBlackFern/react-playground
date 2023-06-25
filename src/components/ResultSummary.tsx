import ResultSummaryResult from "./ResultSummaryResult";
import ResultSummarySummary from "./ResultSummarySummary";

const ResultSummary = () => {
  return (
    <div className="my-20 flex scale-125 flex-col md:mt-10 md:flex-row">
      <ResultSummaryResult />
      <ResultSummarySummary />
    </div>
  );
};

export default ResultSummary;

import Reaction from "../assets/images/icon-reaction.svg";
import Memory from "../assets/images/icon-memory.svg";
import Verbal from "../assets/images/icon-verbal.svg";
import Visual from "../assets/images/icon-visual.svg";

const svgMap = new Map<string, string>();
svgMap.set("reaction", Reaction);
svgMap.set("memory", Memory);
svgMap.set("verbal", Verbal);
svgMap.set("visual", Visual);

interface ResultSummarySummaryRowProps {
  title: "reaction" | "memory" | "verbal" | "visual";
  score: number;
}

// colours:
// Light red: #ff5757
// Orangey yellow: #ffb01f
// Green teal: #00bd91
// Cobalt blue: #1125d4

// White: #ffffff
// Pale blue: #ebf1ff
// Light lavender: #c8c7ff
// Dark gray blue: #303b5a
const ResultSummarySummaryRow: React.FC<ResultSummarySummaryRowProps> = ({
  title,
  score,
}) => {
  return (
    <div className="my-1 flex w-full rounded-lg bg-[#ebf1ff] px-2 py-2.5  text-xs dark:bg-[#000f34]">
      <div
        className={`flex flex-row gap-2 text-[10px] font-bold
      ${title === "reaction" && "text-[#ff5757] dark:text-[#dc0000]"}
      ${title === "memory" && "text-[#ffb01f] dark:text-[#e19100]"}
      ${title === "verbal" && "text-[#00bd91] dark:text-[#00f0b8]"}
      ${title === "visual" && "text-[#1125d4] dark:text-[#3347ef]"}
      `}
      >
        <img src={svgMap.get(title)} alt="icon" className="w-3" />
        <p>{title.charAt(0).toUpperCase() + title.slice(1)}</p>
      </div>
      <span className="ml-auto flex flex-row gap-1 self-end text-[10px] font-bold text-[#303b5a] dark:text-[#a6b0cf]">
        <p className="">{score}</p>
        <p className="opacity-30">/ 100</p>
      </span>
    </div>
  );
};

export default ResultSummarySummaryRow;

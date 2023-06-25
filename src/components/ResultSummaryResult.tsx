// colours:
// Light red: #ff5757
// Orangey yellow: #ffb01f
// Green teal: #00bd91
// Cobalt blue: #1125d4

// White: #ffffff
// Pale blue: #ebf1ff
// Light lavender: #c8c7ff
// Dark gray blue: #303b5a

// light slate blue (background): #7857ff or
// light royal blue (background): #2e2be9
// violet blue (circle): #4e21ca opacity 0
// persian blue (circle): #2421ca opacity 1
const ResultSummaryResult = () => {
  return (
    <div className="z-10 flex h-auto w-52 flex-col items-center rounded-2xl bg-gradient-to-b from-[#7857ff] to-[#2e2be9]/[0.95] p-5 text-center font-hanken dark:from-[#170075] dark:to-[#0e0c79]/[0.95] md:px-9">
      <h2 className="mb-3 text-[10px] font-bold text-[#c8c7ff] md:text-sm">
        Your Result
      </h2>
      <div className="mb-4 grid h-20 w-20 place-content-center rounded-full bg-gradient-to-b from-[#4e21ca] to-[#2421ca]/0 dark:from-[#8461e5] dark:to-[#6361e5]/0 md:h-[120px] md:w-[120px]">
        <p className="text-3xl font-extrabold text-white md:mb-1.5 md:text-[42px]">
          76
        </p>
        <p className="text-[10px] font-bold text-[#c8c7ff]/[0.5]">of 100</p>
      </div>
      <p className="mb-1.5 text-sm font-semibold text-white md:text-base">
        Great
      </p>
      <p className="text-[9px] text-[#c8c7ff]">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default ResultSummaryResult;

import { useState } from "react";
import { Button, ResetButton, Spinner } from "./ui";
import { CaptchaChess, CaptchaInput, CaptchaSelect, CaptchaSlider } from "./";

// type Props = {
//   children: ReactNode;
// };

const CaptchaMain = () => {
  const [isDone, setIsDone] = useState(false);
  // @ts-ignore // we ignore this for now. it will be needed later
  const [showStage, setShowStage] = useState(true);
  const [stage, setStage] = useState(0);

  const stages = [
    <CaptchaChess />,
    <CaptchaSlider />,
    <CaptchaInput />,
    <CaptchaSelect />,
  ];

  function resetStage() {
    setStage((prev) => prev + 1);
    setTimeout(() => setStage((prev) => prev - 1), 0);
  }

  function handleVerify() {
    // setShowStage((prev) => !prev);
    // setTimeout(() => {
    //   setShowStage((prev) => !prev);
    // }, 1000);
    setStage((prev) => prev + 1);
    if (stage === stages.length - 1) {
      setIsDone((prev) => !prev);
      setStage(0);
    }
  }

  return (
    <>
      <div className="relative flex items-center justify-center">
        <Button
          className={`box-border h-10 w-10 border-4 bg-muted transition-all duration-1000 ${
            isDone ? "scale-0" : "scale-100 delay-500"
          }`}
          onClick={() => {
            setIsDone((prev) => !prev);
          }}
        ></Button>
        <Spinner
          className={`absolute h-10 w-10 transition-all duration-1000 ${
            isDone ? "scale-100" : "scale-0 delay-500"
          }`}
        />

        {/* pop-up */}
        <div
          className={`absolute -left-[26px] top-[60px] w-auto origin-[15%_0] border-2 bg-background transition-all ${
            isDone ? "scale-100" : "scale-0"
          }`}
        >
          <div className="relative">
            <div className="absolute -top-5 left-8">
              <div className=" h-0 w-0 border-x-[12px] border-b-[20px] border-x-transparent border-b-border" />
              <div className="absolute top-1 h-0 w-0 border-x-[12px] border-b-[20px] border-x-transparent border-b-background" />
            </div>
            <main
              className={`flex flex-col items-center justify-center ${
                showStage && isDone ? "" : "invisible"
              }`}
            >
              {stages[stage]}
              <div className="mt-1 flex w-full gap-2 border-t p-2">
                <div className="group relative flex h-8 w-8 items-center justify-center rounded-full bg-primary leading-none">
                  <p className="text-center text-lg font-semibold text-secondary">
                    i
                  </p>
                  <div
                    className={
                      "absolute right-1/2 top-0 z-20 w-[220px] origin-bottom -translate-y-[110%] translate-x-1/2 scale-0 rounded-xl border bg-background p-2 text-base text-muted-foreground transition-all duration-300 group-hover:scale-100"
                    }
                  >
                    Hello there. We think you ain't no human. In case you ARE a
                    human, have fun.
                  </div>
                </div>
                <ResetButton
                  reset={resetStage}
                  className="h-8 w-8 rounded-full"
                />
                <Button
                  className="ml-auto flex h-8 px-2.5 text-base font-semibold"
                  onClick={handleVerify}
                >
                  Verify
                </Button>
              </div>
              {/* <div
              className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 ${
                showStage && isDone ? "invisible" : ""
              }`}
            >
              <Spinner />
              <span>Loading...</span>
            </div> */}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaptchaMain;

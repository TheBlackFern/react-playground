import {
  NaughtsAndCrossesBoard,
  PolyrhytmBoard,
  RockPaperScissors,
  QRCode,
  ResultSummary,
  Rating,
  Wordle,
  ChessBoard,
  CaptchaWords,
  Creation,
  GuessColor,
} from "../components";
import { ComponentsType } from "../App";
import { Button } from "../components/ui";

// type def is needed for TS to understand that names are strings
// otherwise is says that these are properties and doesn't understand
// that Components[key] is a JSX.Element
export const Components: { [key: string]: JSX.Element } = {
  Captcha: <CaptchaWords />,
  "Guess Color": <GuessColor />,
  Chess: <ChessBoard />,
  Wordle: <Wordle />,
  "Naughts and Crosses": <NaughtsAndCrossesBoard />,
  Polyrhytms: <PolyrhytmBoard />,
  "Rock-Paper-Scissors": <RockPaperScissors />,
  "QR Code": <QRCode />,
  "Result Summary": <ResultSummary />,
  Rating: <Rating />,
};

type Props = {
  shownComponents: ComponentsType;
  setShownComponents: React.Dispatch<React.SetStateAction<ComponentsType>>;
};

const Creations = ({ shownComponents, setShownComponents }: Props) => {
  return (
    <main className="relative mb-10 flex h-[calc(100vh-7rem)] flex-row flex-wrap justify-center bg-background px-10 pt-5 transition-all duration-300 dark:bg-background">
      {Object.values(shownComponents).every((v) => v === false) && (
        <div className="-mt-3 flex flex-col items-center justify-center">
          <p className="flex flex-col font-sans text-[5rem] font-extrabold leading-none tracking-tighter md:flex-row md:gap-3">
            <span className="animate-transparent bg-gradient-to-r from-red-600 to-lime-400 bg-clip-text">
              Look.
            </span>
            <span className="animate-transparent bg-gradient-to-r from-cyan-400 to-pink-600 bg-clip-text animate-delay-[2500ms]">
              At.
            </span>
            <span className="animate-transparent bg-gradient-to-r from-purple-400 to-teal-600 bg-clip-text animate-delay-[5000ms]">
              All.
            </span>
            <span className="animate-transparent bg-gradient-to-r from-sky-600 to-orange-400 bg-clip-text animate-delay-[7500ms]">
              That.
            </span>
          </p>
          <p className="mt-8 text-center text-muted-foreground xs:text-xl sm:w-[550px] sm:text-2xl">
            Feel free to select any number of creations from the menu above or
            simply click the button below.
          </p>
          <div className="group relative mt-16">
            <div className="absolute inset-0 -m-1 animate-color rounded-lg opacity-75 blur-md transition duration-1000 animate-delay-[250ms] group-hover:animate-none group-hover:opacity-0" />
            <div className="absolute inset-0 -m-[1px] rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 transition duration-1000 group-hover:animate-none" />
            <Button
              onClick={() =>
                setShownComponents({
                  Captcha: true,
                  "Guess Color": true,
                  Wordle: true,
                  Polyrhytms: true,
                  "Naughts and Crosses": true,
                  "Rock-Paper-Scissors": true,
                  Rating: true,
                  "Result Summary": true,
                  "QR Code": true,
                  Chess: true,
                })
              }
              className="relative h-12 w-48 border-none bg-background from-pink-500 to-purple-500 py-4 font-outfit text-lg  duration-300  group-hover:bg-transparent group-hover:bg-gradient-to-r group-hover:text-black"
            >
              Show All
            </Button>
          </div>
        </div>
      )}
      {Object.keys(shownComponents).map((key) => {
        return (
          shownComponents[key] && (
            <Creation name={key} key={key}>
              {Components[key]}
            </Creation>
          )
        );
      })}
    </main>
  );
};

export default Creations;

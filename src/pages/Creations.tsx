import {
  NaughtsAndCrossesBoard,
  PolyrhytmBoard,
  RockPaperScissors,
  QRCode,
  ResultSummary,
  Rating,
  Wordle,
  // ChessBoard,
  Captcha,
  Creation,
  GuessColor,
} from "../components";
import { Gem } from "lucide-react";
import { TComponents } from "../App";
import Chessground from "@react-chess/chessground";
import "chessground/assets/chessground.base.css";
// import "chessground/assets/chessground.brown.css";
// import "chessground/assets/chessground.cburnett.css";
import "../assets/chess-pieces.css";
import "../assets/chess-board.css";
import { Button } from "../components/ui";
import _ from "lodash";

// type def is needed for TS to understand that names are strings
// otherwise is says that these are properties and doesn't understand
// that Components[key] is a JSX.Element
export const Components: { [key: string]: JSX.Element } = {
  Captcha: <Captcha />,
  "Guess Color": <GuessColor />,
  Wordle: <Wordle />,
  Polyrhythms: <PolyrhytmBoard />,
  "Naughts and Crosses": <NaughtsAndCrossesBoard />,
  "Rock-Paper-Scissors": <RockPaperScissors />,
  Rating: <Rating />,
  "Result Summary": <ResultSummary />,
  "QR Code": <QRCode />,
  Chess: (
    <Chessground
      width={480}
      height={480}
      config={{ movable: { free: true, color: "both" } }}
    />
  ),
};

type CreationsProps = {
  shownComponents: TComponents;
  setShownComponents: React.Dispatch<React.SetStateAction<TComponents>>;
};

const Creations = ({ shownComponents, setShownComponents }: CreationsProps) => {
  return (
    <main className="relative mb-10 flex min-h-[calc(100vh-7rem)] flex-row flex-wrap justify-center bg-background px-10 pt-5 transition-all duration-300 dark:bg-background">
      {Object.values(shownComponents).every((v) => v === false) && (
        <div className="-mt-3 flex flex-col items-center justify-center">
          <p className="flex flex-col font-sans text-[5rem] font-extrabold leading-none tracking-tighter md:flex-row md:gap-3">
            <span className="animate-transparent bg-gradient-to-r from-lime-400 to-red-600 bg-clip-text">
              Look.
            </span>
            <span className="animate-transparent bg-gradient-to-r from-pink-600 to-cyan-400 bg-clip-text animate-delay-[2500ms]">
              At.
            </span>
            <span className="animate-transparent bg-gradient-to-r from-teal-600 to-purple-400 bg-clip-text animate-delay-[5000ms]">
              All.
            </span>
            <span className="animate-transparent bg-gradient-to-r from-orange-400 to-sky-600 bg-clip-text animate-delay-[7500ms]">
              That.
            </span>
          </p>
          <p className="mt-8 text-center text-muted-foreground xs:text-xl sm:w-[550px] sm:text-2xl">
            Feel free to select any number of creations from the menu above or
            simply click the button below.
          </p>
          <div className="mt-16 flex flex-row gap-16">
            <Button
              variant={"outline"}
              onClick={() =>
                setShownComponents((prev) => _.mapValues(prev, () => true))
              }
              className=" h-12 w-52 gap-1.5 py-4 font-outfit text-lg  "
            >
              <Gem size={20} />
              <span>Show All</span>
            </Button>
            <div className="group relative">
              <div className="gradient absolute inset-0 -m-1 animate-gradient-border rounded-lg blur-md transition duration-100 group-hover:scale-0" />
              <div className="gradient absolute inset-0 -m-[1px] animate-gradient-border rounded-lg transition duration-1000" />
              <Button
                variant={"outline"}
                onClick={() =>
                  setShownComponents({
                    Captcha: false,
                    "Guess Color": true,
                    Wordle: true,
                    Polyrhythms: true,
                    "Naughts and Crosses": false,
                    "Rock-Paper-Scissors": false,
                    Rating: false,
                    "Result Summary": false,
                    "QR Code": false,
                    Chess: false,
                  })
                }
                className="relative h-12 w-52 border-none bg-background py-4 font-outfit  text-lg font-semibold duration-300 group-hover:bg-transparent group-hover:text-black"
              >
                Highlights
              </Button>
            </div>
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

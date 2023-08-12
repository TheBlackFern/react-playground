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
};

const Creations = ({ shownComponents }: Props) => {
  return (
    <main className="relative mb-10 flex h-full flex-row flex-wrap justify-center bg-background px-10 pt-5 transition-all duration-300 dark:bg-background sm:flex-row">
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

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
} from "../components";
import { ComponentsType } from "../App";
import Chessground from "@react-chess/chessground";
import "chessground/assets/chessground.base.css";
// import "chessground/assets/chessground.brown.css";
// import "chessground/assets/chessground.cburnett.css";
import "../assets/chess-pieces.css";
import "../assets/chess-board.css";

// type def is needed for TS to understand that names are strings
// otherwise is says that these are properties and doesn't understand
// that Components[key] is a JSX.Element
export const Components: { [key: string]: JSX.Element } = {
  Captcha: <Captcha />,
  Chess: (
    <Chessground
      width={480}
      height={480}
      config={{ movable: { free: true, color: "both" } }}
    />
  ),
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
    <main className="relative mb-10 flex h-full flex-row flex-wrap justify-center bg-background px-10 pt-5 text-primary transition-all duration-300 dark:bg-background dark:text-primary sm:flex-row">
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

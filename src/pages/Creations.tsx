import { Creation } from "../components/ui";
import {
  NaughtsAndCrossesBoard,
  PolyrhytmBoard,
  RockPaperScissors,
  QRCode,
  ResultSummary,
  Rating,
  Wordle,
} from "../components";

type Props = {
  shownComponents: string[];
};

const Creations = ({ shownComponents }: Props) => {
  return (
    <main className="relative mb-10 flex h-full flex-col flex-wrap justify-center bg-background px-5 pt-5 text-primary transition-all duration-300 dark:bg-background dark:text-primary md:flex-row md:space-x-16 lg:space-x-28 xl:space-x-40">
      {shownComponents.includes("ttt") && (
        <Creation name="Naughts and crosses">
          <NaughtsAndCrossesBoard />
        </Creation>
      )}
      {shownComponents.includes("poly") && (
        <Creation name="Polyrhythms">
          <PolyrhytmBoard />
        </Creation>
      )}
      {shownComponents.includes("rpc") && (
        <Creation name="Rock-Paper-Scissors">
          <RockPaperScissors />
        </Creation>
      )}
      {shownComponents.includes("qr") && (
        <Creation name="QR Code">
          <QRCode />
        </Creation>
      )}
      {shownComponents.includes("results") && (
        <Creation name="Result Summary">
          <ResultSummary />
        </Creation>
      )}
      {shownComponents.includes("rate") && (
        <Creation name="Rating Component">
          <Rating />
        </Creation>
      )}
      {shownComponents.includes("wordle") && (
        <Creation name="Wordle">
          <Wordle />
        </Creation>
      )}
    </main>
  );
};

export default Creations;

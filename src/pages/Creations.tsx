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
import { ComponentsType } from "../App";

// type def is needed for TS to understand that names are strings
// otherwise is says that these are properties and doesn't understand
// that Components[key] is a JSX.Element
export const Components: {[key: string]: JSX.Element} = {
  "Wordle":  <Wordle />,
  "Naughts and Crosses": <NaughtsAndCrossesBoard />,
  "Polyrhytms":  <PolyrhytmBoard />,
  "Rock-Paper-Scissors":  <RockPaperScissors />,
  "QR Code":  <QRCode />,
  "Result Summary":  <ResultSummary />,
  "Rating":  <Rating />,
}

type Props = {
  shownComponents: ComponentsType;
};

const Creations = ({ shownComponents }: Props) => {
  return (
    <main className="relative mb-10 flex h-full flex-col flex-wrap justify-center bg-background px-5 pt-5 text-primary transition-all duration-300 dark:bg-background dark:text-primary md:flex-row md:space-x-16 lg:space-x-28 xl:space-x-40">
      { Object.keys(shownComponents).map((key) => {
        return shownComponents[key] && <Creation name={key} key={key}>
          {Components[key]}
        </Creation>
      })}
    
    </main>
  );
};

export default Creations;

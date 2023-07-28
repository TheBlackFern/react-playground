import { Piece } from "./ChessBoard";
import {
  BlackBishop,
  BlackKing,
  BlackKnight,
  BlackPawn,
  BlackQueen,
  BlackRook,
  WhiteBishop,
  WhiteKing,
  WhiteKnight,
  WhitePawn,
  WhiteQueen,
  WhiteRook,
} from "./pieces";

type Props = {
  piece: Piece;
  isWhite: boolean;
};

const piecesMap = {
  "": "",
  k: <BlackKing />,
  q: <BlackQueen />,
  b: <BlackBishop />,
  n: <BlackKnight />,
  p: <BlackPawn />,
  r: <BlackRook />,
  K: <WhiteKing />,
  Q: <WhiteQueen />,
  B: <WhiteBishop />,
  N: <WhiteKnight />,
  P: <WhitePawn />,
  R: <WhiteRook />,
};

const ChessTile = ({ piece, isWhite }: Props) => {
  return (
    <div
      className={`flex h-9 w-9 items-center justify-center text-[3.1rem] transition-all duration-200 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-17 lg:w-17 ${
        isWhite
          ? "bg-primary-foreground/90 dark:bg-primary/90"
          : "bg-primary/80 dark:bg-muted-foreground/50"
      }`}
    >
      <div className={`scale-[0.6] sm:scale-75 md:scale-100 lg:scale-110`}>
        {piecesMap[piece]}
      </div>
    </div>
  );
};

export default ChessTile;

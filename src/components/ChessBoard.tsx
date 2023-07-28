import ChessTile from "./ChessTile";

export type Piece =
  | ""
  | "P"
  | "K"
  | "Q"
  | "R"
  | "N"
  | "B"
  | "p"
  | "k"
  | "q"
  | "r"
  | "n"
  | "b";

function covertFEN(fen: string) {
  const board: Piece[][] = [];
  let row: Piece[] = [];
  let i = 0;
  while (board.length < 8) {
    if (!isNaN(parseInt(fen.at(i)!))) {
      row = row.concat(Array<Piece>(parseInt(fen.at(i)!)).fill(""));
    } else if (fen.at(i) === "/" || i === fen.length) {
      board.push(row);
      row = [];
    } else {
      row.push(fen.at(i)! as Piece);
    }
    i++;
  }
  return board;
}

const ChessBoard = () => {
  const Board = covertFEN("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");

  return (
    <div className="relative box-content h-auto w-auto border-8 border-primary dark:border-secondary">
      {/* it's a ruler :) */}
      {/* <div className="absolute h-72 w-[calc(18px+5*36px)] bg-red-900 sm:h-96 sm:w-[calc(24px+0*48px)]  md:h-[448px] md:w-[calc(28px+0*56px)]"></div> */}
      {Board.map((row, i) => (
        <div className="flex flex-row" key={i}>
          {row.map((piece, j) => (
            <ChessTile
              piece={piece}
              isWhite={(i + j) % 2 === 0}
              key={i * 8 + j}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChessBoard;

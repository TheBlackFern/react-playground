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
  const Board = covertFEN(
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR/RNBQKBNR"
  );

  return (
    <div className="box-content h-auto w-auto border-8 border-primary dark:border-secondary">
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

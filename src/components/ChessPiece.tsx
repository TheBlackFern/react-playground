import { Piece } from "./ChessBoard";
import { pieceImages } from "../assets";
// import {
//   BlackBishop,
//   BlackKing,
//   BlackKnight,
//   BlackPawn,
//   BlackQueen,
//   BlackRook,
//   WhiteBishop,
//   WhiteKing,
//   WhiteKnight,
//   WhitePawn,
//   WhiteQueen,
//   WhiteRook,
// } from "./";

// const piecesMap = {
//   "": "",
//   k: <BlackKing />,
//   q: <BlackQueen />,
//   b: <BlackBishop />,
//   n: <BlackKnight />,
//   p: <BlackPawn />,
//   r: <BlackRook />,
//   K: <WhiteKing />,
//   Q: <WhiteQueen />,
//   B: <WhiteBishop />,
//   N: <WhiteKnight />,
//   P: <WhitePawn />,
//   R: <WhiteRook />,
// };

type Props = {
  piece: Piece;
  setPiece: React.Dispatch<React.SetStateAction<Piece>>;
};

const ChessPiece = ({ piece, setPiece }: Props) => {
  function handleDragStart(e: React.DragEvent<HTMLDivElement>) {
    e.dataTransfer.setData("pieceType", piece);

    console.log(`took ${piece}`);
  }
  return (
    // <div
    //   className=""
    // >
    //   {piecesMap[piece]}
    // </div>
    <img
      draggable
      onDragStart={handleDragStart}
      onDragOver={(e) => {
        setPiece("");
        e.preventDefault();
      }}
      className="w-auto cursor-grab"
      src={pieceImages[piece]}
      alt="piece"
    />
  );
};

export default ChessPiece;

import { useState } from "react";
import { Piece } from "./ChessBoard";
import { ChessPiece } from "./";

type Props = {
  piece: Piece;
  isWhite: boolean;
};

const ChessTile = ({ piece, isWhite }: Props) => {
  const [currentPiece, setCurrentPiece] = useState<Piece>(piece);

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    const pieceType = e.dataTransfer.getData("pieceType") as Piece;
    console.log(`got ${pieceType}`);

    setCurrentPiece(pieceType);
  }

  // function handleDragStart(e: React.DragEvent<HTMLDivElement>) {
  //   e.dataTransfer.setData("pieceType", currentPiece);
  //   console.log(currentPiece);

  //   setCurrentPiece("");
  // }

  return (
    <div
      draggable
      // onDragStart={handleDragStart}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className={`group flex h-9 w-9 items-center justify-center p-0.5 text-[3.1rem] transition-all duration-200 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-17 lg:w-17  ${
        isWhite
          ? "bg-primary-foreground/90 dark:bg-primary/90"
          : "bg-primary/80 dark:bg-muted-foreground/50"
      }`}
    >
      {currentPiece && (
        <ChessPiece piece={currentPiece} setPiece={setCurrentPiece} />
      )}
    </div>
  );
};

export default ChessTile;

import { Circle, X } from "lucide-react";
import { Button } from "./ui";

type NaughtsAndCrossesTileProps = {
  value: string | null;
  onTileClick: React.MouseEventHandler<HTMLButtonElement>;
  isWinning: boolean;
  gameOver: boolean;
};

const NaughtsAndCrossesTile = ({
  value,
  onTileClick,
  isWinning,
  gameOver,
}: NaughtsAndCrossesTileProps) => {
  return (
    <Button
      variant="outline"
      className="h-12 w-12 border-2 text-sm font-medium transition-all duration-300  disabled:opacity-100 dark:border"
      onClick={onTileClick}
      disabled={gameOver ? true : false}
    >
      <X
        className={`absolute h-8 w-8 transition-all duration-300 ${
          value === "X" ? "scale-100" : "scale-0"
        }  ${gameOver && (isWinning ? "opacity-100" : "opacity-30")}`}
        strokeWidth={1}
      />
      <Circle
        className={`absolute h-7 w-7 transition-all duration-300 ${
          value === "O" ? "scale-100" : "scale-0"
        }  ${gameOver && (isWinning ? "opacity-100" : "opacity-30")}`}
        strokeWidth={1}
      />
    </Button>
  );
};

export default NaughtsAndCrossesTile;

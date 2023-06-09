import { MouseEventHandler } from "react";
import { Circle, X } from "lucide-react";
import { Button } from "./ui/Button";

interface tileProps {
  value: string | null;
  onTileClick: MouseEventHandler<HTMLButtonElement>;
  isWinning: boolean;
  gameOver: boolean;
}

const NaughtsAndCrossesTile: React.FC<tileProps> = ({
  value,
  onTileClick,
  isWinning,
  gameOver,
}) => {
  return (
    <Button
      variant="outline"
      className="h-12 w-12 text-sm font-medium transition-all duration-300"
      onClick={onTileClick}
      disabled={gameOver ? true : false}
    >
      <X
        className={`${
          value === "X" ? "scale-100" : "scale-0"
        } absolute h-8 w-8 transition-all duration-300 ${
          gameOver
            ? isWinning
              ? "text-red-500 dark:text-red-700"
              : "opacity-30"
            : "text-primary opacity-100 dark:text-primary"
        }`}
        strokeWidth={1}
      />
      <Circle
        className={`absolute h-7 w-7 transition-all duration-300 ${
          value === "O" ? "scale-100" : "scale-0"
        }  ${
          gameOver
            ? isWinning
              ? "text-red-500 dark:text-red-700"
              : "opacity-30"
            : "text-primary opacity-100 dark:text-primary"
        }`}
        strokeWidth={1}
      />
    </Button>
  );
};

export default NaughtsAndCrossesTile;

import { MouseEventHandler } from "react";
import { ReactComponent as Naught } from "../assets/svgs/naught.svg";
import { ReactComponent as Cross } from "../assets/svgs/cross.svg";
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
      variant="secondary"
      className={`h-12 w-12 border-blue-800 text-sm font-medium transition-all duration-300 ${
        isWinning
          ? "text-rose-700 dark:text-rose-500"
          : "text-primary dark:text-primary"
      }`}
      onClick={onTileClick}
      isDisabled={gameOver ? true : false}
    >
      <Cross
        className={`${
          value === "X" ? "scale-100" : "scale-0"
        } absolute h-8 w-8 transition-all duration-300`}
      />
      <Naught
        className={`${
          value === "O" ? "scale-100" : "scale-0"
        } absolute h-8 w-8 transition-all duration-300`}
      />
    </Button>
  );
};

export default NaughtsAndCrossesTile;

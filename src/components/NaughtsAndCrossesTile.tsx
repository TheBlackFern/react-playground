import React, { MouseEventHandler } from "react";
import Button from "./basic/Button";

interface tileProps {
  value: string | null;
  onTileClick: MouseEventHandler<HTMLButtonElement>;
  done: boolean;
}

const NaughtsAndCrossesTile: React.FC<tileProps> = ({
  value,
  onTileClick,
  done,
}) => {
  return (
    <Button
      variant="alternative"
      additionalClasses={`transition-all w-12 h-12 text-sm font-medium ${
        done ? "text-rose-700" : "text-gray-900"
      }  ${done ? "dark:text-rose-500" : "dark:text-gray-400"}`}
      onClick={onTileClick}
    >
      {(value === "X" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )) ||
        (value === "O" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ))}
    </Button>
  );
  // return (
  //     <button type="button" className={`w-12 h-12 text-sm font-medium text-gray-900 ${ done ? 'text-rose-700' :  'text-gray-900' }  ${ done ? 'dark:text-rose-500' :  'dark:text-gray-400' } focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`} onClick={onTileClick}>
  //         {value}
  //     </button>
  // );
};

export default NaughtsAndCrossesTile;

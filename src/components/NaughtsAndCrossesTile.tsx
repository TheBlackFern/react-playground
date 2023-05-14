import React, { MouseEventHandler } from "react";

interface tileProps {
    value: number | null,
    onTileClick: MouseEventHandler<HTMLButtonElement>,
    done: boolean,
}

const NaughtsAndCrossesTile:React.FC<tileProps> = ({ value, onTileClick, done }) => {

    return (
        <button type="button" className={`w-12 h-12 text-sm font-medium text-gray-900 ${ done ? 'text-rose-700' :  'text-gray-900' }  ${ done ? 'dark:text-rose-500' :  'dark:text-gray-400' } focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`} onClick={onTileClick}>
            {value}
        </button>
    );
}

export default NaughtsAndCrossesTile;
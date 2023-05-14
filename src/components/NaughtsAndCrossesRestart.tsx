import React, { MouseEventHandler } from "react";

interface RestartProps {
    resetBoard: MouseEventHandler<HTMLButtonElement>,
}

const NaughtsAndCrossesRestart: React.FC<RestartProps> = ({resetBoard}) => {
    return <button type="button" className="absolute top-12 mt-1 left-40 w-10 h-10 focus:outline-none text-white grid justify-center items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={resetBoard}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
    </button>;
}
  
export default NaughtsAndCrossesRestart;
import { useState } from 'react';


function CounterButtons() {
    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);

    const handleClick = (counterIndex: number) => {
        if (counterIndex === 1) {
            setCount1(count1 + 1);
        } else {
            setCount2(count2 + 1);
        }
    }

    return (
        <div className='flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-start'>
            <div className="flex">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-36 sm:mr-4 px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => handleClick(1)}>
                {count1} damn times
                </button>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-36 sm:mr-4 px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => handleClick(1)}>
                {count1} damn times
                </button>
            </div>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-36" onClick={() => handleClick(2)}>
            {count2} damn times
            </button>
        </div>
    );
  }

export default CounterButtons;
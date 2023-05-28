import { useState } from "react";
import Button from "./ui/Button";

function CounterButtons() {
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);

  const handleClick = (counterIndex: number) => {
    if (counterIndex === 1) {
      setCount1(count1 + 1);
    } else {
      setCount2(count2 + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start sm:justify-between">
      <div className="flex">
        <Button
          className="mb-2 mr-2 w-36 px-5 py-2.5"
          onClick={() => handleClick(1)}
        >
          {count1} damn times
        </Button>
        <Button
          className="mb-2 mr-2 w-36 px-5 py-2.5"
          onClick={() => handleClick(1)}
        >
          {count1} damn times
        </Button>
      </div>
      <Button
        className="mb-2 mr-2 w-36 px-5 py-2.5"
        onClick={() => handleClick(2)}
      >
        {count2} damn times
      </Button>
    </div>
  );
}

export default CounterButtons;

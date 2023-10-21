import { CSSProperties, useRef, useState } from "react";
import { Slider } from "./ui";

const CaptchaSlider = () => {
  const [distance, setDistance] = useState(0);
  const aim = useRef(Math.floor(45 + Math.random() * 100));

  const sliderStyle: CSSProperties = {
    left: `${distance}px`,
  };

  const aimStyle: CSSProperties = {
    left: `${aim.current}px`,
  };

  const handleChange = (val: number[]) => {
    setDistance(val[0]);
  };
  // +- 4px

  return (
    <div className="mb-3 flex w-60 flex-col gap-3 p-2">
      <div className="relative h-24 select-none bg-muted">
        <div
          style={sliderStyle}
          className="absolute top-1/2 h-5 w-5 -translate-y-1/2 text-xl"
        >
          🐷
        </div>
        <div
          style={aimStyle}
          className="absolute top-1/2 z-10 h-6 w-6 -translate-y-6 bg-transparent text-lg"
        >
          🧢
        </div>
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-base text-muted-foreground">
          Drag until the puzzle fits
        </span>
        <Slider
          min={0}
          max={204}
          onValueChange={handleChange}
          className="text-blue-600"
        />
      </label>
    </div>
  );
};

export default CaptchaSlider;

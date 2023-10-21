import { useRef, useState } from "react";
import { Button } from "./ui";
import { Check } from "lucide-react";
import { generateStyles } from "../lib/utils";

function generateImages() {
  let emojies = [
    "🐷",
    "🐖",
    "🐓",
    "🐥",
    "🦉",
    "🐕‍🦺",
    "🐈",
    "🐱",
    "🦝",
    "🐳",
    "🦦",
  ];
  const res = ["🐖"];
  while (res.length < 9) {
    const idx = Math.floor(Math.random() * emojies.length);
    const rand = emojies[idx];
    emojies.splice(idx, 1);
    res.push(rand);
  }
  let currentIndex = res.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [res[currentIndex], res[randomIndex]] = [
      res[randomIndex],
      res[currentIndex],
    ];
  }

  return res;
}

const CaptchaSelect = () => {
  const images = useRef(generateImages());
  const styles = useRef(generateStyles(9));
  const [selected, setSelected] = useState<Array<boolean>>(
    Array(9).fill(false)
  );

  function selectElement(i: number) {
    const newSelected = [...selected];
    newSelected[i] = !newSelected[i];
    setSelected(newSelected);
  }

  return (
    <div className="w-80 px-1 py-1.5">
      <div className="flex flex-col bg-primary px-4 py-3 text-secondary">
        <p>Select all images with</p>
        <p className="text-2xl font-bold leading-none ">minipiglets</p>
        <p>Click verify once there are none left</p>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1.5 p-2 [&_div]:m-auto">
        {Array.from(Array(9).keys()).map((i) => (
          <Button
            className={`relative h-24 w-24 rounded-none bg-muted ${
              selected[i] ? "scale-90" : "scale-100"
            }`}
            key={`${selected[i]}${i}`}
            onClick={() => selectElement(i)}
          >
            <Check
              className={`absolute right-0 top-0 z-10 h-5 w-5 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary p-0.5   ${
                selected[i] ? "" : "invisible"
              }`}
            />
            <span className={`text-3xl ${styles.current[i]}`}>
              {images.current[i]}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CaptchaSelect;

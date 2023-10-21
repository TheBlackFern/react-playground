import { generateStyles } from "../lib/utils";
import { Input } from "./ui";

const CaptchaInput = () => {
  const words = [
    "мен маленький",
    "пряник вкусненький",
    "салатик свеженький",
    "ползун миленький",
    "хрюник прикольненький",
  ];
  const randomWords =
    words[Math.floor(Math.random() * words.length)].split(" ");
  const randomStyles = generateStyles(2);

  return (
    <div className="mb-2 flex w-60 flex-col gap-3 p-2">
      <div className="flex h-24 flex-row items-center justify-center overflow-hidden bg-muted">
        <span
          className={`origin-center translate-x-5 select-none text-xl italic text-primary ${randomStyles[0]}`}
        >
          {randomWords[0]}
        </span>
        <span
          className={`origin-center select-none font-sans text-3xl leading-none text-primary ${randomStyles[1]}`}
        >
          {randomWords[1]}
        </span>
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-base text-muted-foreground">Type the answer</span>
        <Input placeholder="Type..." />
      </label>
    </div>
  );
};

export default CaptchaInput;

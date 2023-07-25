import { Volume2, VolumeX } from "lucide-react";
import { Button, Slider } from "./ui";

// this is so bad, can I do this without passing
// 100000 props?
type Props = {
  handleTogglePlay: React.MouseEventHandler<HTMLButtonElement>;
  handleChangeSpeed: (val: number[]) => void;
  handleChangeVolume: (val: number[]) => void;
  isPlaying: boolean;
  syncTime: number;
}

const PolyrhytmSettings = ({
  handleTogglePlay,
  handleChangeSpeed,
  handleChangeVolume,
  isPlaying,
  syncTime,
}: Props) => {
  return (
    <div className="z-10 grid w-52 grid-flow-row grid-cols-5 place-items-center gap-y-1">
      <p className="col-span-1 w-18 place-self-end text-right">Sync time</p>
      <Slider
        defaultValue={[600]}
        onValueChange={handleChangeSpeed}
        min={100}
        max={900}
        step={50}
        className="col-span-2 col-start-3 h-2 w-24 cursor-pointer appearance-none rounded-lg bg-destructive text-destructive dark:bg-destructive"
      ></Slider>
      <p className="ml-2 w-16 place-self-start">{`${syncTime} sec`}</p>
      <p className="place-self-end text-right">Volume</p>
      <VolumeX className="col-span-1" size={16} />
      <Slider
        defaultValue={[0.5]}
        onValueChange={handleChangeVolume}
        min={0.0}
        max={1.0}
        step={0.01}
        className="col-span-2 h-2 w-24 cursor-pointer appearance-none rounded-lg bg-destructive text-destructive dark:bg-destructive"
      ></Slider>
      <Volume2 className="col-span-1" size={16} />
      <Button onClick={handleTogglePlay} className="col-span-5 h-6 w-12 py-3">
        {isPlaying ? "Pause" : "Start"}
      </Button>
    </div>
  );
};

export default PolyrhytmSettings;

interface RatingSelectRadioProps {
  points: number;
  rate: (rating: number) => void;
}

const RatingSelectRadio: React.FC<RatingSelectRadioProps> = ({
  points,
  rate,
}) => {
  return (
    <label className="relative h-9 w-9 transition-all duration-300">
      <input
        name="rating"
        type="radio"
        className="peer h-9 w-9 cursor-pointer appearance-none rounded-full bg-secondary checked:bg-primary"
        onClick={() => rate(points)}
      ></input>
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary peer-checked:text-secondary">
        {points}
      </span>
    </label>
  );
};

export default RatingSelectRadio;

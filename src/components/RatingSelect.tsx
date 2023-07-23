import RatingSelectRadio from "./RatingSelectRadio";
import { Button } from "./ui";
import { ReactComponent as Star } from "../assets/images/star.svg";

interface RatingSelectProps {
  submit: (isSubmitted: boolean) => void;
  rate: (rating: number) => void;
}

const RatingSelect: React.FC<RatingSelectProps> = ({ submit, rate }) => {
  return (
    <>
      <Star className="h-9 w-9  rounded-full bg-secondary p-2" />
      <p className="text-lg font-semibold">How did we do?</p>
      <p className="mb-3 text-sm leading-tight text-muted-foreground">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="mb-2 flex w-full flex-row justify-between">
        {[...Array(5).keys()].map((i) => (
          <RatingSelectRadio key={i} points={i + 1} rate={rate} />
        ))}
      </div>
      <Button
        className="rounded-3xl text-sm font-semibold uppercase"
        onClick={() => submit(true)}
      >
        Submit
      </Button>
    </>
  );
};

export default RatingSelect;

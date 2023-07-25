import ThankYou from "../assets/images/illustration-thank-you.svg";

type Props = {
  rating: number;
}

const RatingThankYou = ({ rating }: Props) => {
  return (
    <>
      <img src={ThankYou} className="mb-2 h-24 w-36 self-center" />
      <p className="mb-2 w-36 self-center rounded-3xl bg-secondary px-2 py-1.5 text-center  text-xs text-lime-700 dark:text-lime-500">
        You selected {rating} out of 5
      </p>
      <p className="text-center text-lg font-semibold">Thank you!</p>
      <p className="mb-3 text-center text-sm leading-tight text-muted-foreground">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </>
  );
};

export default RatingThankYou;

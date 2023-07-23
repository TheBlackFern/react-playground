import { useState } from "react";
import RatingSelect from "./RatingSelect";
import RatingThankYou from "./RatingThankYou";

const Rating = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rating, setRating] = useState(5);

  return (
    <div className="flex h-80 w-80 flex-col gap-3 rounded-xl px-5 py-7 shadow-lg transition-all duration-100 dark:border dark:shadow-none">
      {!isSubmitted && (
        <RatingSelect submit={setIsSubmitted} rate={setRating} />
      )}
      {isSubmitted && <RatingThankYou rating={rating} />}
    </div>
  );
};

export default Rating;

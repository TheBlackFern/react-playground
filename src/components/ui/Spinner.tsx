import { Oval } from "react-loader-spinner";

type Props = {
  className?: string;
};

const Spinner = ({ className }: Props) => {
  return (
    <div
      className={`${className} flex items-center justify-center text-primary`}
    >
      <Oval
        ariaLabel="loading-indicator"
        width={36}
        height={36}
        strokeWidth={5}
        strokeWidthSecondary={1}
        color="currentColor"
        secondaryColor="white"
      />
    </div>
  );
};

export default Spinner;

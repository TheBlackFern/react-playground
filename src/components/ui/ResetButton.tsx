import { RefreshCw } from "lucide-react";
import { Button } from "./Button";

type Props = {
  className?: string;
  reset: () => void;
};

const ResetButton = ({ reset, className }: Props) => {
  return (
    <Button
      className={`absolute -right-14 top-1/2 h-10 w-10 -translate-y-1/2 sm:-right-12 ${className}`}
      onClick={reset}
    >
      <RefreshCw className="absolute h-auto w-auto p-3" strokeWidth={1.5} />
    </Button>
  );
};

export default ResetButton;

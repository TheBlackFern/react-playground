import { RefreshCw } from "lucide-react";
import { Button } from "./Button";

type ResetButtonProps = {
  className?: string;
  reset: () => void;
};

const ResetButton = ({ reset, className }: ResetButtonProps) => {
  return (
    <Button
      className={`group relative h-10 w-10  ${className}`}
      onClick={reset}
    >
      <div
        className={
          "absolute right-1/2 top-0 z-20 origin-bottom -translate-y-[110%] translate-x-1/2 scale-0 rounded-xl border bg-background p-2 text-sm text-muted-foreground transition-all duration-300 group-hover:scale-100"
        }
      >
        Restart
      </div>
      <RefreshCw className="absolute h-auto w-auto p-3" strokeWidth={1.5} />
    </Button>
  );
};

export default ResetButton;

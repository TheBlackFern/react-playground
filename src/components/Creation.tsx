import { ReactNode } from "react";

type Props = {
  name: string;
  children: ReactNode;
};

const Creation = ({ name, children }: Props) => {
  return (
    <div className="mx-5 mb-4 flex w-auto flex-col items-center gap-4">
      <h2 className="w-auto border-b pb-3 text-center text-2xl font-semibold">
        {name}!
      </h2>
      {children}
    </div>
  );
};

export default Creation;

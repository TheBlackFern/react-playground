import * as React from "react";

type CreationProps = {
  name: string;
  children: React.ReactNode;
};

const Creation = ({ name, children }: CreationProps) => {
  return (
    <div className="mx-5 mb-4 flex w-auto flex-col items-center justify-start gap-4">
      <h2 className="w-auto border-b-2 pb-3 text-center text-2xl font-semibold leading-tight tracking-tighter">
        {name}!
      </h2>
      {children}
    </div>
  );
};

export default Creation;

import { ReactNode } from "react";

interface CreationProps {
  name: string;
  children: ReactNode;
}

const Creation: React.FC<CreationProps> = ({ name, children }) => {
  return (
    <div className="mb-4 flex flex-col items-center gap-4">
      <h2 className="w-auto border-b pb-3 text-center text-2xl font-semibold">
        {name}!
      </h2>
      {children}
    </div>
  );
};

export default Creation;

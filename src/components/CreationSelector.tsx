import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui";
import { TComponents } from "../App";
import _ from "lodash";
import * as React from "react";

type CreationSelectorProps = {
  className?: string;
  shownComponents: TComponents;
  setShownComponents: React.Dispatch<React.SetStateAction<TComponents>>;
};

const CreationSelector = ({
  className,
  shownComponents,
  setShownComponents,
}: CreationSelectorProps) => {
  const [selectAll, setSelectAll] = React.useState(false);

  React.useEffect(() => {
    if (Object.values(shownComponents).every(Boolean)) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [shownComponents]);

  function hadndleSelectAll(selected: boolean) {
    setShownComponents((prev) => _.mapValues(prev, () => selected));
    setSelectAll((prev) => !prev);
  }
  // generalised function for all components which is used to create
  // partial functions for all components
  function handleChecked(key: boolean, componentName: string) {
    const updPart = {
      [componentName]: key,
    };
    setShownComponents((prev) => ({ ...prev, ...updPart }));
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} className={`${className}`}>
          Components
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 text-center">
        <DropdownMenuLabel>Render Components</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={selectAll}
          onCheckedChange={hadndleSelectAll}
          onSelect={(e) => {
            e.preventDefault();
          }}
        >
          Check All
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />

        {Object.keys(shownComponents).map((key) => (
          <DropdownMenuCheckboxItem
            checked={shownComponents[key]}
            onCheckedChange={_.partial(handleChecked, _, key)}
            onSelect={(e) => {
              e.preventDefault();
            }}
            key={key}
          >
            {key}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CreationSelector;

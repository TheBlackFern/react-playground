import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui";
import { ComponentsType } from "../App";
import _ from "lodash";

type Props = {
  className?: string;
  shownComponents: ComponentsType;
  setShownComponents: React.Dispatch<React.SetStateAction<ComponentsType>>;
}

const CreationSelector = ({
  className,
  shownComponents,
  setShownComponents,
}: Props) => {

  // generalised function for all components which is used to create 
  // partial functions for all components
  function handleChecked(key: boolean, componentName: string) {
    const updPart = {
      [componentName]: key
    }
    setShownComponents((prev) => ({...prev, ...updPart}))
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
        {Object.keys(shownComponents).map((key) => (
          <DropdownMenuCheckboxItem 
            checked={shownComponents[key]} 
            onCheckedChange={_.partial(handleChecked, _, key)} 
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

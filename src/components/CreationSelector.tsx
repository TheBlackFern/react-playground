"use client";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/Button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/Dropdown";
import { useEffect, useState } from "react";

interface CreationSelectorProps {
  className?: string;
  setShownComponents: (shownComponents: string[]) => void;
}

type Checked = DropdownMenuCheckboxItemProps["checked"];

const CreationSelector: React.FC<CreationSelectorProps> = ({
  className,
  setShownComponents,
}) => {
  const [showTicTacToe, setShowTicTackToe] = useState<Checked>(false);
  const [showPolyrhythms, setShowPolyrhytms] = useState<Checked>(true);
  const [showRPC, setShowRPC] = useState<Checked>(false);
  const [showQRCode, setShowQRCode] = useState<Checked>(false);
  const [showResultSummary, setShowResultSummary] = useState<Checked>(false);

  useEffect(() => {
    const shownComponents = new Array<string>();
    if (showTicTacToe) shownComponents.push("ttt");
    if (showPolyrhythms) shownComponents.push("poly");
    if (showRPC) shownComponents.push("rpc");
    if (showQRCode) shownComponents.push("qr");
    if (showResultSummary) shownComponents.push("results");
    setShownComponents(shownComponents);
  }, [showTicTacToe, showPolyrhythms, showRPC, showQRCode, showResultSummary]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={`${className} text-base`}>Components</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 text-center">
        <DropdownMenuLabel>Render Components</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showTicTacToe}
          onCheckedChange={setShowTicTackToe}
        >
          Naughts and Crosses
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPolyrhythms}
          onCheckedChange={setShowPolyrhytms}
        >
          Polyrhythms
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showRPC}
          onCheckedChange={setShowRPC}
        >
          Rock-Paper-Scissors
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showQRCode}
          onCheckedChange={setShowQRCode}
        >
          QR Code
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showResultSummary}
          onCheckedChange={setShowResultSummary}
        >
          Result Summary
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CreationSelector;

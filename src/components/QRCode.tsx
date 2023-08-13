import * as React from "react";
import qrcode from "../assets/images/image-qr-code.png";
import { Skeleton } from "./ui";

// colors:
// dark text: #1f3251 or hsl(218, 44%, 22%)
// light text: #7b879d or hsl(220, 15%, 55%)
// (unused) background: #d6e2f0 or hsl(212, 45%, 89%)
const QRCode = () => {
  // doing this to preload the image
  const imageElement = new Image();
  imageElement.src = qrcode;

  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <div className="flex h-auto w-80 flex-col items-center justify-center rounded-2xl border px-3 pb-10 pt-4 text-center leading-tight shadow-md">
      <img
        className={`mb-6 h-72 w-72 rounded-xl ${
          isLoading ? "hidden" : "block"
        }`}
        src={qrcode}
        alt="qrcode"
        onLoad={() => setIsLoading(false)}
      ></img>
      {isLoading && <Skeleton className="mb-6 h-72 w-72 rounded-xl" />}
      <p className="mb-4 px-5 text-[22px] font-bold tracking-tight ">
        {" "}
        {/* text-[#1f3251] dark:text-[#7b879d] */}
        Improve your front-end skills by building projects
      </p>
      <p className="px-4 text-[15px] text-muted-foreground">
        {/* text-[#7b879d] dark:text-[#7b879d]">{/* text-[#1f3251] dark:text-[#7b879d] */}
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
};

export default QRCode;

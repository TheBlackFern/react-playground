import spinner from "../assets/images/captcha_spinner.gif";
import logo from "../assets/images/captcha_logo.svg";
import { Button } from "./ui";
import * as React from "react";

const CaptchaWords = () => {
  const [removeButton, setRemoveButton] = React.useState(false);

  return (
    <div className=" font-hanken">
      <div className="flex w-80 flex-row items-center justify-center gap-4 rounded-xl border-2 p-3">
        <div className="relative flex items-center justify-center">
          <Button
            className={`box-border h-10 w-10 border-4 bg-muted transition-all duration-1000 ${
              removeButton ? "scale-0" : "scale-100"
            }`}
            onClick={() => {
              setRemoveButton((prev) => !prev);
            }}
          ></Button>
          <img
            src={spinner}
            className={`absolute inset-0 m-auto h-9 w-9 transition-all duration-1000 delay-300 ${
              removeButton ? "scale-100" : "scale-0"
            }`}
            alt="spinner"
          />

          {/* pop-up */}
          <div
            className={`absolute -left-7 top-14 mt-1.5 origin-[15%_0] border-2 bg-background px-1 py-1.5 transition-all duration-500 ${
              removeButton ? "scale-100" : "scale-0"
            }`}
          >
            <div className="relative w-80">
              <div className="absolute -top-7 left-8">
                <div className=" h-0 w-0 border-x-[12px] border-b-[20px] border-x-transparent border-b-border" />
                <div className="absolute top-1 h-0 w-0 border-x-[12px] border-b-[20px] border-x-transparent border-b-background" />
              </div>
              <div className="flex flex-col gap-1 bg-blue-600 px-4 py-3">
                <p className="text-white">Select all images with</p>
                <p className="text-2xl font-bold leading-none text-white">
                  minipiglets
                </p>
                <p className="text-white">
                  Click verify once there are none left
                </p>
              </div>
              <div className="grid grid-cols-3 gap-1 p-3 [&_div]:m-auto">
                <div className="h-24 w-24 bg-slate-600" />
                <div className="h-24 w-24 bg-slate-600" />
                <div className="h-24 w-24 bg-slate-600" />
                <div className="h-24 w-24 bg-slate-600" />
                <div className="h-24 w-24 bg-slate-600" />
                <div className="h-24 w-24 bg-slate-600" />
                <div className="h-24 w-24 bg-slate-600" />
                <div className="h-24 w-24 bg-slate-600" />
                <div className="h-24 w-24 bg-slate-600" />
              </div>
              <Button
                className="mb-2 ml-56 bg-blue-600 text-lg font-bold text-white"
                onClick={() => {
                  setRemoveButton((prev) => !prev);
                }}
              >
                Verify
              </Button>
            </div>
          </div>
        </div>

        <p className="text-lg">I'm not a robot</p>
        <div className="ml-6 flex flex-col items-center gap-1.5">
          <img src={logo} className="h-9 w-9" alt="captcha logo" />
          <span className="text-xs text-muted-foreground">reCAPTCHA</span>
        </div>
      </div>
    </div>
  );
};

export default CaptchaWords;

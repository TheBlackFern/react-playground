import logo from "../assets/images/captcha_logo.svg";
import { CaptchaMain } from "./";

const Captcha = () => {
  return (
    <div className="font-hanken">
      <div className="mb-[540px] flex w-80 flex-row items-center justify-center gap-4 rounded-xl border-2 p-3">
        <CaptchaMain />
        <p className="text-lg text-primary">I'm not a robot</p>
        <div className="ml-6 flex flex-col items-center gap-1.5">
          <img src={logo} className="h-9 w-9" alt="captcha logo" />
          <span className="text-xs text-muted-foreground">reCAPTCHA</span>
        </div>
      </div>
    </div>
  );
};

export default Captcha;

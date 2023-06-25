import qrcode from "../assets/images/image-qr-code.png";

// colors:
// dark text: #1f3251 or hsl(218, 44%, 22%)
// light text: #7b879d or hsl(220, 15%, 55%)
// (unused) background: #d6e2f0 or hsl(212, 45%, 89%)
const QRCode = () => {
  // doing this to preload the image
  const imageElement = new Image();
  imageElement.src = qrcode;

  return (
    <div className="flex h-[500px] w-80 flex-col rounded-xl border p-3 text-center leading-tight">
      <img className="mb-6 rounded-xl" src={qrcode} alt="qrcode"></img>
      <p className="mb-4 px-3 text-[22px] font-bold tracking-tight text-[#1f3251] dark:text-[#7b879d]">
        Improve your front-end skills by building projects
      </p>
      <p className="px-2 text-[15px] text-[#7b879d] dark:text-[#7b879d]">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
};

export default QRCode;

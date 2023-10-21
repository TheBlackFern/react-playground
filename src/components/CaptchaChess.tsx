import Chessground from "@react-chess/chessground";

const CaptchaChess = () => {
  const fens = ["8/5k2/8/8/2Q5/8/8/1K6 w - - 0 1"];
  const randomFEN = fens[Math.floor(Math.random() * fens.length)];

  return (
    <div className="flex flex-col items-center justify-center gap-3 p-2">
      <div className="mr-0.5 flex w-full flex-col bg-primary px-4 py-3 text-secondary">
        <p>Play the best move for</p>
        <p className="text-2xl font-bold leading-none ">
          {randomFEN.split(" ")[1] === "w" ? "white" : "black"}
        </p>
        <p>Click verify after playing</p>
      </div>
      <Chessground
        config={{ fen: randomFEN, coordinates: false }}
        width={340}
        height={340}
      />
    </div>
  );
};

export default CaptchaChess;

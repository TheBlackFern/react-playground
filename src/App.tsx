import ThemeChanger from "./components/ui/ThemeChanger";
import Creation from "./components/ui/Creation";
// import NaughtsAndCrossesBoard from "./components/NaughtsAndCrossesBoard";
// import RockPaperScissors from "./components/RockPaperScissors";
// import PolyrhytmBoard from "./components/PolyrhytmBoard";
// import QRCode from "./components/QRCode";
import ResultSummary from "./components/ResultSummary";
import { Swords } from "lucide-react";
import { useTheme } from "./lib/utils";
import { useEffect, useState } from "react";
import CreationSelector from "./components/CreationSelector";
import NaughtsAndCrossesBoard from "./components/NaughtsAndCrossesBoard";
import PolyrhytmBoard from "./components/PolyrhytmBoard";
import RockPaperScissors from "./components/RockPaperScissors";
import QRCode from "./components/QRCode";

function App() {
  const [theme, setTheme] = useTheme();
  const [shownComponents, setShownComponents] = useState(["poly"]);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <nav className="flex h-16 w-full flex-row items-center space-x-4 border-b bg-background px-6 md:space-x-6 lg:px-12">
        <div className="flex flex-row items-center space-x-2">
          <Swords className="h-8 w-8" />
          <h1 className="mb-1 text-3xl text-primary">Playground!</h1>
        </div>
        <CreationSelector
          setShownComponents={setShownComponents}
          className=""
        />
        <div className="w-full">
          <ThemeChanger
            className="ml-auto justify-self-end"
            theme={theme}
            setThemeStrategy={setTheme}
          />
        </div>
      </nav>
      <main className="relative mb-10 flex h-full flex-col flex-wrap justify-center bg-background px-5 pt-5 text-primary transition-all duration-300 dark:bg-background dark:text-primary md:flex-row md:space-x-16 lg:space-x-28 xl:space-x-40">
        {shownComponents.includes("ttt") && (
          <Creation name="Naughts and crosses">
            <NaughtsAndCrossesBoard />
          </Creation>
        )}
        {shownComponents.includes("poly") && (
          <Creation name="Polyrhythms">
            <PolyrhytmBoard />
          </Creation>
        )}
        {shownComponents.includes("rpc") && (
          <Creation name="Rock-Paper-Scissors">
            <RockPaperScissors />
          </Creation>
        )}
        {shownComponents.includes("qr") && (
          <Creation name="QR Code">
            <QRCode />
          </Creation>
        )}
        {shownComponents.includes("results") && (
          <Creation name="Result Summary">
            <ResultSummary />
          </Creation>
        )}
      </main>
    </>
  );
}

export default App;

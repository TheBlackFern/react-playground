import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NavBar from "./pages/NavBar";
import Creations from "./pages/Creations";
import { ThemeProvider } from "./components/ui/ThemeProvider";

const queryClient = new QueryClient();

export type TComponents = Record<string, boolean>;

function App() {
  const [shownComponents, setShownComponents] = React.useState<TComponents>({
    Captcha: false,
    "Guess Color": false,
    Wordle: false,
    Polyrhythms: false,
    "Naughts and Crosses": false,
    "Rock-Paper-Scissors": false,
    Rating: false,
    "Result Summary": false,
    "QR Code": false,
    Chess: false,
  });

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <NavBar
          shownComponents={shownComponents}
          setShownComponents={setShownComponents}
        />
        <Creations
          shownComponents={shownComponents}
          setShownComponents={setShownComponents}
        />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;

import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import NavBar from "./pages/NavBar";
import Creations from "./pages/Creations";

const queryClient = new QueryClient();

export type ComponentsType = {
  [key: string]: boolean;
};

function App() {
  const [shownComponents, setShownComponents] = React.useState<ComponentsType>({
    Captcha: false,
    "Guess Color": true,
    Wordle: false,
    Polyrhytms: false,
    "Naughts and Crosses": false,
    "Rock-Paper-Scissors": false,
    Rating: false,
    "Result Summary": false,
    "QR Code": false,
    Chess: false,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <NavBar
        shownComponents={shownComponents}
        setShownComponents={setShownComponents}
      />
      <Creations shownComponents={shownComponents} />
    </QueryClientProvider>
  );
}

export default App;

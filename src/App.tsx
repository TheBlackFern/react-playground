import { useState } from "react";
import NavBar from "./pages/NavBar";
import Creations from "./pages/Creations";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export type ComponentsType = {
  [key: string]: boolean;
};

function App() {
  const [shownComponents, setShownComponents] = useState<ComponentsType>({
    Captcha: true,
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

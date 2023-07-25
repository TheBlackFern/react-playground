import { useState } from "react";
import NavBar from "./pages/NavBar";
import Creations from "./pages/Creations";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export type ComponentsType = { 
  [key: string] : boolean,
}

function App() {
  const [shownComponents, setShownComponents] = useState<ComponentsType>({
    "Wordle": true,
    "Naughts and Crosses": false,
    "Polyrhytms": false,
    "Rock-Paper-Scissors": false,
    "QR Code": false,
    "Result Summary": false,
    "Rating": false
  });

  return (
    <QueryClientProvider client={queryClient}>
      <NavBar shownComponents={shownComponents} setShownComponents={setShownComponents} />
      <Creations shownComponents={shownComponents} />
    </QueryClientProvider>
  );
}

export default App;

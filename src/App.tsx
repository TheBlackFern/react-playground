import { useState } from "react";
import NavBar from "./pages/NavBar";
import Creations from "./pages/Creations";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  const [shownComponents, setShownComponents] = useState(["poly"]);

  return (
    <QueryClientProvider client={queryClient}>
      <NavBar setShownComponents={setShownComponents} />
      <Creations shownComponents={shownComponents} />
    </QueryClientProvider>
  );
}

export default App;

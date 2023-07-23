import { useState } from "react";
import NavBar from "./pages/NavBar";
import Creations from "./pages/Creations";

function App() {
  const [shownComponents, setShownComponents] = useState(["poly"]);

  return (
    <>
      <NavBar setShownComponents={setShownComponents} />
      <Creations shownComponents={shownComponents} />
    </>
  );
}

export default App;

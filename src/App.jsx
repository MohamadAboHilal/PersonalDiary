import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import FormPopup from "./components/FormPopup";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <FormPopup />
      </div>
    </>
  );
}

export default App;

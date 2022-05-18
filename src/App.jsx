import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Screen from "./components/Screen";

function App() {
  const [display, setDisplay] = useState({ primary: "0", secondary: "" });
  const [operands, setOperands] = useState([null, null])
  
  const handleClick = (e) => {
  };

  return (
    <div className="App">
      <Screen display={display} />
      <Buttons onClick={handleClick} />
    </div>
  );
}

export default App;

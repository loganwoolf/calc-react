import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Screen from "./components/Screen";

function App() {
  const [display, setDisplay] = useState({ primary: "0", secondary: "" });
  const [operands, setOperands] = useState([]);
  const [operator, setOperator] = useState(null);

  const handleClick = (e) => {
    const input = e.target.textContent;
    const inputType = e.target.className;

    if (input === "C") {
      setDisplay({ primary: "0", secondary: "" });
      setOperands([])
      setOperator(null)      
      return;
    }
  };

  return (
    <div className="App">
      <Screen display={display} />
      <Buttons onClick={handleClick} />
    </div>
  );
}

export default App;

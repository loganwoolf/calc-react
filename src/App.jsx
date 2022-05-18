import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Screen from "./components/Screen";

function App() {
  const [display, setDisplay] = useState({ primary: "0", secondary: "" });
  const [operands, setOperands] = useState([]);
  const [operator, setOperator] = useState(null);

  const operate = {
    "+": (a, b) => (+a + +b).toString(),
    "-": (a, b) => (+a - +b).toString(),
    "*": (a, b) => (+a * +b).toString(),
    "/": (a, b) => (+a / +b).toString(),
  };

  const runCalc = (a, b) => operate[operator](a, b);

  const handleClick = (e) => {
    const input = e.target.textContent;
    const inputType = e.target.className;

    if (input === "C") {
      setDisplay({ primary: "0", secondary: "" });
      setOperands([])
      setOperator(null)      
      return;
    }

    if (inputType.includes("number")) {
      return setDisplay((prev) => {
        if (prev.primary === "0") {
          return { ...prev, primary: input };
        }
        if (prev.primary === "-0") {
          return { ...prev, primary: `-${input}` };
        }
        const update = prev.primary + input;
        return { ...prev, primary: update };
      });
    }

    if (inputType.includes("negative")) {
      return setDisplay((prev) => {
        if (prev.primary.includes("-")) {
          const update = prev.primary.slice(1);
          return { ...prev, primary: update };
        }
        const update = `-${prev.primary}`;
        return { ...prev, primary: update };
      });
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

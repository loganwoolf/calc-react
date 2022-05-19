import { useState } from "react";
import calculate from "../lib/calculate";

export default function useButtons() {
  const [display, setDisplay] = useState({ primary: "0", secondary: "" });
  const [operands, setOperands] = useState([]);
  const [operator, setOperator] = useState(null);
  const [useNextInput, setUseNextInput] = useState(false);

  const DISPLAYLENGTH = 12;

  const runCalc = (a, b) =>
    calculate[operator](a, b)
      .toPrecision(DISPLAYLENGTH)
      .replace(/\.?0+$/, "");

  const handleClear = () => {
    if (display.primary !== "0") {
      return setDisplay((prev) => ({ ...prev, primary: "0" }));
    }
    setDisplay({ primary: "0", secondary: "" });
    setOperands([]);
    setOperator(null);
    return;
  };

  const handleNumber = (e) => {
    const input = e.target.textContent;
    if (useNextInput) {
      return setDisplay((prev) => {
        setUseNextInput(false);
        return { ...prev, primary: input };
      });
    }
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
  };

  const handleDecimal = () => {
    if (display.primary.includes(".")) {
      return;
    }
    return setDisplay((prev) => {
      const update = prev.primary + ".";
      return { ...prev, primary: update };
    });
  };

  const handleNegative = () => {
    return setDisplay((prev) => {
      if (prev.primary.includes("-")) {
        const update = prev.primary.slice(1);
        return { ...prev, primary: update };
      }
      const update = `-${prev.primary}`;
      return { ...prev, primary: update };
    });
  };

  const handleOperator = (e) => {
    const input = e.target.textContent;
    if (operands.length === 0) {
      setOperands([display.primary]);
      setOperator(input);
      setDisplay({ primary: "0", secondary: `${display.primary} ${input}` });
      return;
    }
    if (operands.length === 1) {
      return setOperands((prev) => {
        const result = runCalc(...prev, display.primary);
        setOperator(input);
        setDisplay({ primary: result, secondary: `${result} ${input}` });
        setUseNextInput(true);
        return [result];
      });
    }
  };

  const handleEquals = () => {
    if (operands.length === 1) {
      return setOperands((prev) => {
        const result = runCalc(...prev, display.primary);
        setOperator(null);
        setDisplay({ primary: result, secondary: "" });
        setUseNextInput(true);
        return [];
      });
    }
  };

  const handleClick = (e) => {
    const inputType = e.target.className;

    if (inputType.includes("clear")) {
      handleClear();
    }

    if (inputType.includes("number")) {
      handleNumber(e);
    }

    if (inputType.includes("decimal")) {
      handleDecimal();
    }

    if (inputType.includes("negative")) {
      handleNegative();
    }

    if (inputType.includes("operator")) {
      handleOperator(e);
    }

    if (inputType.includes("equals")) {
      handleEquals();
    }
  };

  return {
    display,
    handleClick,
  };
}

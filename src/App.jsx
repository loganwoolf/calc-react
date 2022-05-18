import "./App.css";
import Buttons from "./components/Buttons";
import Screen from "./components/Screen";
import useButtons from "./hooks/useButtons";

function App() {
  const { handleClick, display } = useButtons();

  return (
    <div className="App">
      <Screen display={display} />
      <Buttons onClick={handleClick} />
    </div>
  );
}

export default App;

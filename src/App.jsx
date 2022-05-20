import "./App.css";
import Buttons from "./components/Buttons";
import Screen from "./components/Screen";
import useButtons from "./hooks/useButtons";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";
// import the next line into each file fontawesome is needed
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fas);

function App() {
  const { handleClick, display } = useButtons();

  return (
    <>
      <div className="App">
        <Screen display={display} />
        <Buttons onClick={handleClick} />
      </div>
      <Footer />
    </>
  );
}

export default App;

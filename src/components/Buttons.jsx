import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Buttons.css";

export default function Buttons(props) {
  return (
    <div onClick={props.onClick} className="input-buttons">
      <button className="clear-button warn">
        {"C"}
        <FontAwesomeIcon icon="fa-solid fa-c" />
      </button>
      <button className="negative-button">
        {"+/-"}
        <FontAwesomeIcon icon="fa-solid fa-plus-minus" />
      </button>
      <button className="operator-button">
        {"/"}
        <FontAwesomeIcon icon="fa-solid fa-divide" />
      </button>
      <button className="operator-button">
        {"*"}
        <FontAwesomeIcon icon="fa-solid fa-xmark" />
      </button>
      <button className="number-button">
        {"7"}
        <FontAwesomeIcon icon="fa-solid fa-7" />
      </button>
      <button className="number-button">
        {"8"}
        <FontAwesomeIcon icon="fa-solid fa-8" />
      </button>
      <button className="number-button">
        {"9"}
        <FontAwesomeIcon icon="fa-solid fa-9" />
      </button>
      <button className="operator-button">
        {"-"}
        <FontAwesomeIcon icon="fa-solid fa-minus" />
      </button>
      <button className="number-button">
        {"4"}
        <FontAwesomeIcon icon="fa-solid fa-4" />
      </button>
      <button className="number-button">
        {"5"}
        <FontAwesomeIcon icon="fa-solid fa-5" />
      </button>
      <button className="number-button">
        {"6"}
        <FontAwesomeIcon icon="fa-solid fa-6" />
      </button>
      <button className="operator-button">
        {"+"}
        <FontAwesomeIcon icon="fa-solid fa-plus" />
      </button>
      <button className="number-button">
        {"1"}
        <FontAwesomeIcon icon="fa-solid fa-1" />
      </button>
      <button className="number-button">
        {"2"}
        <FontAwesomeIcon icon="fa-solid fa-2" />
      </button>
      <button className="number-button">
        {"3"}
        <FontAwesomeIcon icon="fa-solid fa-3" />
      </button>
      <button className="equals-button tall">
        {"="}
        <FontAwesomeIcon icon="fa-solid fa-equals" />
      </button>
      <button className="number-button wide">
        {"0"}
        <FontAwesomeIcon icon="fa-solid fa-0" />
      </button>
      <button className="decimal-button">
        {"."}
        <FontAwesomeIcon icon="fa-solid fa-circle" />
      </button>
    </div>
  );
}

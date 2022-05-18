import "./Buttons.css";

export default function Buttons(props) {


  return (
    <div onClick={props.onClick} className="input-buttons">
      <button className="clear-button">{"C"}</button>
      <button className="negative-button">{"+/-"}</button>
      <button className="operator-button">{"/"}</button>
      <button className="operator-button">{"*"}</button>
      <button className="number-button">{"7"}</button>
      <button className="number-button">{"8"}</button>
      <button className="number-button">{"9"}</button>
      <button className="operator-button">{"-"}</button>
      <button className="number-button">{"4"}</button>
      <button className="number-button">{"5"}</button>
      <button className="number-button">{"6"}</button>
      <button className="operator-button">{"+"}</button>
      <button className="number-button">{"1"}</button>
      <button className="number-button">{"2"}</button>
      <button className="number-button">{"3"}</button>
      <button className="equals-button tall">{"="}</button>
      <button className="number-button wide">{"0"}</button>
      <button className="decimal-button">{"."}</button>
    </div>
  );
}

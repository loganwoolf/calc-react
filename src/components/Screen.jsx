import "./Screen.css";

export default function Screen(props) {
  const { primary, secondary } = props.display;

  return (
    <div className="screen">
      <div className="secondary-display">{secondary}</div>
      <div className="primary-display">{primary}</div>
    </div>
  );
}

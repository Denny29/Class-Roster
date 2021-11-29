import "./styles.css";

export default function App() {
  function List(parm1, parm2, parm3) {
    return (
      <ul>
        <li>{parm1}</li>
        <li>{parm2}</li>
        <li>{parm3}</li>
      </ul>
    );
  }

  return (
    <div className="App">
      {List("Denny F.", "Student", "blue")}
      {List("Jake", "Student", "red")}
    </div>
  );
}

function List(parm1, parm2, parm3) {
  return (
    <ul>
      <li>{parm1}</li>
      <li>{parm2}</li>
      <li>{parm3}</li>
    </ul>
  );
}

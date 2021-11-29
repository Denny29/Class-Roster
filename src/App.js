import "./styles.css";

function List(parm) {
  return (
    <ul>
      <li>{parm.name}</li>
      <li>{parm.status}</li>
      <li>{parm.favColor}</li>
    </ul>
  );
}

export default function App() {
  let arr = [
    { name: "Denny F", status: "Student", favColor: "Blue" },
    { name: "Jake C", status: "Student", favColor: "Red" }
  ];

  return <div className="App">{arr.map(List)}</div>;
}

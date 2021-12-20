import "./styles.css";

function printName(parm) {
  return <p className="list">{parm.name}</p>;
}
function printStat(parm) {
  return <p className="list">{parm.status}</p>;
}
function printColor(parm) {
  return (
    <p className="list">
      <span className={parm.favColor}>{parm.favColor}</span>
    </p>
  );
}

export default function App() {
  let arr = [
    { name: "Jacob R", status: "Student", favColor: "blue" },
    { name: "Jake C", status: "Student", favColor: "red" },
    { name: "Jack B", status: "Student", favColor: "yellow" },
    { name: "Bella K", status: "Student", favColor: "green" }
  ];

  return (
    <div className="App">
      <div className="row">
        <h1 className="title">Name</h1>
        {arr.map(printName)}
      </div>
      <div className="row" id="mid">
        <h1 className="title">Status</h1>
        {arr.map(printStat)}
      </div>
      <div className="row">
        <h1 className="title">Favorite Color</h1>
        {arr.map(printColor)}
      </div>
    </div>
  );
}

import "./styles.css";

export default function App() {
  let info = [
    ["Denny", "Student", "Blue"],
    ["Jake", "Student", "Blue"]
  ];

  let display = [];
  // for (let student of info) {

  // display.push(List(student[0], student[1], student[2]));

  return (
    <div className="App">
      {/* {List("Denny F.", "Student", "blue")}
      {List("Jake", "Student", "red")} */}
      {info.map(function (student) {
        return List(student[0], student[1], student[2]);
      })}
    </div>
  );
}

function List(name, status, color) {
  return (
    <ul>
      <li>{name}</li>
      <li>{status}</li>
      <li>{color}</li>
    </ul>
  );
}

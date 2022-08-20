import "./styles.css";
import { useState } from "react";
import mostRuns from "/Mostruns";

var mostRunsList = Object.keys(mostRuns);
export default function App() {
  const [runsList, setRunsList] = useState("T20");
  function formatClickHandler(form) {
    setRunsList(form);
  }
  return (
    <div className="App">
      <>
        <h1>🏏Most Runs In Cricket Format</h1>
        <p>
          Checkout most runs scored by the player in cricket in different forms.
        </p>
        <div>
          {mostRunsList.map((form) => {
            return (
              <button onClick={() => formatClickHandler(form)} key={form}>
                {form}
              </button>
            );
          })}
        </div>
        <ul>
          {mostRuns[runsList].map((run) => (
            <li key={run.name}>
              <div style={{ fontSize: "1.5rem", color: "black" }}>
                {run.name}
              </div>
              <div style={{ fontSize: "1.1rem" }}> Matches: {run.matches} </div>
              <div style={{ fontSize: "1.1rem" }}>Innings: {run.innings} </div>
              <div style={{ fontSize: "1.1rem" }}>Runs: {run.runs} </div>
              <div style={{ fontSize: "1.1rem" }}>Average: {run.average} </div>
            </li>
          ))}
        </ul>
      </>
    </div>
  );
}

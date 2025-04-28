import React from "react";
import { Greet } from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "a",
    last: "b",
  };

  const nameList = [
    {
      first: "q",
      last: "e",
    },
    { first: "r", last: "r" },
    { first: "t", last: "y" },
  ];
  return (
    <div className="App">
      <Greet name="Amol" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;

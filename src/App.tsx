import React from "react";
import { Greet } from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";

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
      {/* <Greet name="Amol" messageCount={10} /> */}
      {/* <Person name={personName} /> */}
      {/* <PersonList names={nameList} /> */}
      {/* <Status status="loading" /> */}
      {/* <Heading>Placeholder text</Heading> */}
      {/* <Oscar>
        <Heading>oscar goes to virat</Heading>
      </Oscar> */}
      {/* <Button
        handleClick={() => {
          console.log("button clicked");
        }}
      ></Button>
      <Input value="" handleChnage={(event) => console.log(event)}></Input> */}
      <Container styles={{ border: "1px solid black", padding: "1 rem" }} />
    </div>
  );
}

export default App;

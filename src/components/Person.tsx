import React from "react";
import { PersonProp } from "./Person.types";
function Person(props: PersonProp) {
  return (
    <div>
      <h2>
        {" "}
        {props.name.first} {props.name.last}{" "}
      </h2>
    </div>
  );
}

export default Person;

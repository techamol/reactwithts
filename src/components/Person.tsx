import React from "react";

type PersonProp = {
  name: { first: string; last: string };
};

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

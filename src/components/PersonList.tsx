import React from "react";
type PersonListProp = {
  names: {
    first: string;
    last: string;
  }[];
};
export default function PersonList(props: PersonListProp) {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
}

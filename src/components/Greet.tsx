import React from "react";
type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn?: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `wel come {props.name} you have {props.messageCount}`
          : "welcome guest"}
      </h2>
    </div>
  );
};

import React from "react";
type StatusProps = {
  // status: string;
  status: "loading" | "success" | "error";
};
function Status(props: StatusProps) {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfully";
  } else if (props.status === "error") {
    message = "error fetching data";
  }
  return (
    <div>
      <h2>Status: {message}</h2>
    </div>
  );
}

export default Status;

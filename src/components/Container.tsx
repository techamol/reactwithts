import React from "react";
type ContainerProp = {
  styles: React.CSSProperties;
};
export default function Container(props: ContainerProp) {
  return <div style={props.styles}>text content goes here</div>;
}

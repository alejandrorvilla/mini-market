import React from "react";

function Empty(props: IProps) {
  return <p>{props.text}</p>;
}

interface IProps {
  text: string;
}

export default Empty;

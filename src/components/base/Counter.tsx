import React from "react";
import "../../resources/styles/components/counter.css";

function Counter(props: IProps) {
  const { quantity } = props;
  return <span className="counter">{quantity}</span>;
}

interface IProps {
  quantity: number;
}

export default Counter;

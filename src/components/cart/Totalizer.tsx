import React from "react";
import "../../resources/styles/components/totalizer.css";

function Totalizer(props: IProps) {
  const { total } = props;

  return (
    <div className="totalizer">
      <span className="label">Total:</span>
      <span className="price">{total}</span>
    </div>
  );
}

interface IProps {
  total: string;
}

export default Totalizer;

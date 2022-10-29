import React from "react";
import "../../resources/styles/components/button.css";

function Button(props: IProps) {
  const { children, className, mode = "purple", disabled, onClick } = props;
  const cssNames = `${className ? className : ""} ${mode}`;
  return (
    <button
      className={`btn ${cssNames}`}
      disabled={!!disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

interface IProps {
  children: string | JSX.Element | Array<JSX.Element | string>;
  className?: string;
  mode?: "purple" | "gray";
  disabled?: boolean;
  onClick: () => void;
}

export default Button;
